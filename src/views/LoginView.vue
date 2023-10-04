<template>
  <v-container class="login-view !tw-font-light">
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="tw-mb-4">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-btn
              v-if="!isLoading"
              color="primary"
              @click="login"
              class="tw-mb-4 text-none"
              text="Login with Twitter (iOS & Android only)"
            ></v-btn>
            <v-progress-linear v-else indeterminate></v-progress-linear>
          </v-card-text>
        </v-card>
        <v-alert
          v-if="showSuccessMessage"
          density="compact"
          type="success"
          variant="outlined"
          title="Login successful"
          :text="`Your access token is: ${token}`"
        ></v-alert>
        <v-alert
          v-if="showFailureMessage"
          density="compact"
          type="warning"
          variant="outlined"
          title="Login failed"
          text="Something went wrong..."
        ></v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TwitterXLogin } from '@gerrithoskins/capacitor-twitterx-login'

const isLoading = ref(false)
const showSuccessMessage = ref(false)
const showFailureMessage = ref(false)
const token = ref('')

const login = async () => {
  isLoading.value = true

  try {
    const { accessToken } = await TwitterXLogin.login()
    if (!accessToken) throw new Error('No access token received')
    token.value = accessToken
    showSuccessMessage.value = true
  } catch (e) {
    console.debug(e)
    showFailureMessage.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

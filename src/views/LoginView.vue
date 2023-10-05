<template>
  <v-container class="login-view !tw-font-light !tw-max-w-screen-md">
    <v-row>
      <v-col cols="12">
        <form @submit.prevent="handleSubmit">
          <v-text-field v-model="form.username" label="Username" required></v-text-field>
          <v-text-field v-model="form.password" label="Password" required type="password"></v-text-field>
          <v-text-field
            v-if="registerClicked"
            v-model="confirmationPassword"
            label="Confirm password"
            required
            type="password"
          ></v-text-field>
          <v-btn color="primary" type="submit">{{ registerClicked ? 'Register' : 'Login' }} </v-btn>
          <div class="tw-cursor-pointer tw-mt-4" @click="onRegisterClick">Don't have an accout? Register</div>
          <v-alert v-if="error">{{ errorMessage }}</v-alert>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const form = reactive({
  username: '',
  password: '',
});

const registerClicked = ref(false);
const confirmationPassword = ref('');
const error = ref(false);
const errorMessage = ref('');

const onRegisterClick = () => (registerClicked.value = true);

const apiRequest = async (url: string, payload: any) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (res.status === 400 || res.status === 401) {
      error.value = true;
      errorMessage.value = `${data.message}. ${data.error ? data.error : ''}`;
      return null;
    }
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const handleLoginOrRegister = async () => {
  const url = registerClicked.value
    ? 'https://pixeltronic.info/api/auth/register'
    : 'https://pixeltronic.info/api/auth/login';
  const data = await apiRequest(url, form);

  if (data) {
    data.role === 'admin' ? location.assign('/admin') : location.assign('/home');
  }
};

const handleSubmit = async () => {
  if (registerClicked.value && form.password !== confirmationPassword.value) {
    error.value = true;
    errorMessage.value = 'Passwords do not match.';
    return;
  }
  await handleLoginOrRegister();
};
</script>

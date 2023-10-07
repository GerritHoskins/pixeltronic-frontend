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
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

const form = reactive({
  username: '',
  password: '',
});

const registerClicked = ref(false);
const confirmationPassword = ref('');
const error = ref(false);
const errorMessage = ref('');

const onRegisterClick = () => (registerClicked.value = true);

const authStore = useAuthStore();

const router = useRouter();
const handleLoginOrRegister = async () => {
  if (registerClicked.value) {
    await authStore.register({ username: form.username, password: form.password });
  } else {
    await authStore.login({ username: form.username, password: form.password });
  }

  await router.push({ name: 'home' });
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

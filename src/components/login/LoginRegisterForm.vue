<template>
  <div class="flex flex-col px-4 gap-4">
    <div v-if="errorMessage.message" :class="`${errorMessage.color} ${errorMessage.textColor} p-2 mb-4 `">
      {{ errorMessage.message }}
    </div>
    <div class="flex flex-col gap-2" v-if="!registerMode">
      <input v-model="form.email" placeholder="Email" />
      <input type="password" v-model="form.password" placeholder="Password" />
    </div>

    <div class="flex flex-col gap-2" v-if="registerMode">
      <input v-model="form.email" placeholder="Email" />
      <input type="password" v-model="form.password" placeholder="Password" />
      <input type="password" v-model="confirmationPassword" placeholder="Confirm Password" />
    </div>
    <button class="theme-button" @click="handleSubmit">{{ registerMode ? 'Register' : 'Login' }}</button>
    <div
      @click="onRegisterClick"
      class="mt-2 cursor-pointer prose max-w-none text-sm text-center text-gray-500 dark:text-gray-400"
    >
      {{ registerMode ? 'Already have an Account?' : 'Create a new Account?' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
  registerMode: boolean;
}>();

const authStore = useUserStore();
const router = useRouter();
const route = useRoute();

const confirmationPassword = ref('');
const accept = ref(false);

const form = reactive({
  email: '',
  password: '',
});

const onRegisterClick = () => {
  reset();
  route.path === '/register' ? router.push('/login') : router.push('/register');
};

const errorMessage = reactive({
  color: '',
  textColor: '',
  message: '',
});

const showError = (message: string) => {
  errorMessage.message = message;
  errorMessage.color = 'bg-red-500';
  errorMessage.textColor = 'text-white';
};

const handleLoginOrRegister = async () => {
  if (props.registerMode) {
    await authStore.register({
      email: form.email,
      password: form.password,
    });
  } else {
    await authStore.login({ email: form.email, password: form.password });
  }
  reset();
};

const handleSubmit = async () => {
  if (props.registerMode && form.password !== confirmationPassword.value) {
    showError('Passwords do not match.');
    return;
  }

  try {
    await handleLoginOrRegister();
  } catch (error) {
    showError(error ? error.toString() : 'Something went wrong.');
  }
};

const reset = () => {
  form.email = '';
  form.password = '';
  confirmationPassword.value = '';
  accept.value = false;
  errorMessage.message = '';
};
</script>

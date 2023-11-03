<template>
  <div class="login-register-form flex flex-col px-4 gap-4">
    <form class="flex flex-col gap-2" @submit.prevent="handleSubmit">
      <input
        v-model.lazy="email"
        placeholder="Email"
        autocomplete="email"
        :class="{ 'outline-red-500': !isValidEmail }"
      />
      <validation-error v-if="!isValidEmail">Please use an valid email.</validation-error>

      <input
        type="password"
        v-model.lazy="password"
        :class="{ 'outline-red-500': !isValidPassword }"
        autocomplete="current-password"
        placeholder="Password"
      />
      <validation-error v-if="!isValidPassword">
        <p v-for="err in passwordValidation.errors" :key="err">
          {{ err }}
        </p></validation-error
      >

      <input
        v-if="registerMode"
        type="password"
        v-model.lazy="confirmPassword"
        autocomplete="new-password"
        placeholder="Confirm Password"
        :class="{ 'outline-red-500': !isValidConfirmPassword }"
      />
      <validation-error v-if="!isValidConfirmPassword">Passwords do not match.</validation-error>
    </form>
    <validation-error v-if="generalError">Something went wrong.</validation-error>
    <button
      class="theme-button border-primary-500 dark:border-primary-400 bg-primary-500 dark:bg-primary-400"
      :class="{ 'cursor-not-allowed': !passwordsFilled && !emailValidation }"
      :disabled="!passwordsFilled && !emailValidation"
      @click="handleSubmit($event)"
    >
      {{ registerMode ? 'Register' : 'Login' }}
    </button>
    <button
      class="theme-button text-gray-500 dark:text-gray-400 bg-gray-200 border-gray-200 dark:bg-gray-700 dark:border-gray-700"
      @click="handleSubmit($event, true)"
    >
      Continue without Login
    </button>
    <div
      @click="onRegisterClick"
      class="mt-2 cursor-pointer prose max-w-none text-sm text-center text-gray-500 dark:text-gray-400"
    >
      {{ registerMode ? 'Already have an Account?' : 'Create a new Account?' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import ValidationError from '@/components/common/ValidationError.vue';

const props = defineProps<{
  registerMode: boolean;
}>();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const generalError = ref(false);

const rules = [
  { message: 'One lowercase letter required.', regex: /[a-z]+/ },
  { message: '6 characters minimum.', regex: /.{8,}/ },
  { message: 'One number required.', regex: /[0-9]+/ },
];

const passwordsFilled = computed(() => {
  return props.registerMode ? password.value !== '' && confirmPassword.value !== '' : password.value !== '';
});

const passwordMismatch = computed(() => {
  if (!props.registerMode) return false;
  if (passwordsFilled.value) {
    return password.value !== confirmPassword.value;
  } else {
    return false;
  }
});

const passwordValidation = computed(() => {
  let errors = [];
  for (let condition of rules) {
    if (!condition.regex.test(password.value)) {
      errors.push(condition.message);
    }
  }
  if (errors.length === 0) {
    return { valid: true, errors };
  } else {
    return { valid: false, errors };
  }
});

const emailValidation = computed(() => {
  const emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
  return emailPattern.test(email.value);
});

const isValidEmail = computed(() => {
  return emailValidation.value || email.value === '';
});

const isValidPassword = computed(() => {
  return passwordValidation.value.valid || !passwordsFilled.value;
});

const isValidConfirmPassword = computed(() => {
  if (!props.registerMode) return true;
  return !passwordMismatch.value || !passwordsFilled.value;
});

const route = useRoute();
const onRegisterClick = () => {
  reset();
  route.path === '/register' ? router.push('/login') : router.push('/register');
};

const reset = () => {
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
};

const handleSubmit = async (payload: Event, skipLogin?: boolean) => {
  if (skipLogin) {
    await authStore.login({ email: 'nouser@pixeltronic.dev', password: 'nouser1234' });
    return;
  }
  if (passwordsFilled.value && !passwordMismatch.value && passwordValidation.value.valid) {
    try {
      await handleLoginOrRegister();
    } catch (error) {
      generalError.value = true;
    }
  } else {
    generalError.value = true;
  }
};

const authStore = useUserStore();
const handleLoginOrRegister = async () => {
  if (props.registerMode) {
    await authStore.register({
      email: email.value,
      password: password.value,
    });
  } else {
    await authStore.login({ email: email.value, password: password.value });
  }
  reset();
};
</script>

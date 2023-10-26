<template>
  <div class="login-page">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="flex flex-col max-w-[18rem] w-full">
        <page-header>{{ isRegisterMode ? 'Register' : 'Login' }}</page-header>
        <form @submit="handleSubmit" @reset="reset" class="flex flex-col gap-2">
          <label class="block">
            <span class="text-gray-700">Email</span>
            <input v-model="form.email" type="email" class="mt-1 block w-full" placeholder="" />
          </label>

          <label class="block">
            <span class="text-gray-700">Password</span>
            <input v-model="form.password" type="password" class="mt-1 block w-full" placeholder="" />
          </label>

          <label class="block" v-if="isRegisterMode">
            <span class="text-gray-700">Confirm Password</span>
            <input
              v-if="isRegisterMode"
              v-model="confirmationPassword"
              type="password"
              class="mt-1 block w-full"
              placeholder=""
            />
          </label>

          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input type="checkbox" checked="" v-model="accept" />
                  <span @click="onRegisterClick" class="ml-2">Don't have an account?</span>
                </label>
              </div>
            </div>
          </div>
          <div class="block">
            <button type="submit">
              {{ isRegisterMode ? 'Register' : 'Login' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import PageHeader from '@/components/common/PageHeader.vue';

const form = reactive({
  email: '',
  password: '',
});

const isRegisterMode = ref(false);
const confirmationPassword = ref('');
const accept = ref(false);

const onRegisterClick = () => (isRegisterMode.value = true);

//const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const authStore = useAuthStore();
const router = useRouter();

const showError = (message: string) => {
  console.table({
    color: 'red-5',
    textColor: 'white',
    icon: 'error',
    message: message,
  });
};

const handleLoginOrRegister = async () => {
  if (isRegisterMode.value) {
    await authStore.register({
      email: form.email,
      password: form.password,
    });
  } else {
    await authStore.login({ email: form.email, password: form.password });
  }

  await router.push('/');
};

const handleSubmit = async () => {
  if (isRegisterMode.value && form.password !== confirmationPassword.value) {
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
};
</script>

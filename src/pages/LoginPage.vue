<template>
  <div class="login-page">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="flex flex-col max-w-[18rem] w-full">
        <page-header>
          <template #default>
            {{ isRegisterMode ? 'Register' : 'Login' }}
          </template>
          <template #subtitle>
            {{ isRegisterMode ? 'Sign up now!' : 'Hi, back already?' }}
          </template>
        </page-header>
        <div>
          <div v-if="errorMessage.message" :class="`${errorMessage.color} ${errorMessage.textColor} p-2 mb-4 `">
            {{ errorMessage.message }}
          </div>
          <div class="flex flex-col gap-2" v-if="!isRegisterMode">
            <input v-model="form.email" placeholder="Email" />
            <input type="password" v-model="form.password" placeholder="Password" />
            <button @click="handleSubmit">Login</button>
          </div>

          <div class="flex flex-col gap-2" v-if="isRegisterMode">
            <input v-model="form.email" placeholder="Email" />
            <input type="password" v-model="form.password" placeholder="Password" />
            <input type="password" v-model="confirmationPassword" placeholder="Confirm Password" />
            <button class="rounded-none" @click="handleSubmit">Register</button>
          </div>

          <div @click="onRegisterClick" class="mt-2 cursor-pointer prose max-w-none text-gray-500 dark:text-gray-400">
            {{ isRegisterMode ? 'Already have an Account?' : 'Creat a new Account?' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import PageHeader from '@/components/common/PageHeader.vue';
import { supabase } from '@/main';

const authStore = useUserStore();
const router = useRouter();
const form = reactive({
  email: '',
  password: '',
});

onMounted(() => {
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN') {
      authStore.updateStateFromResponse({ user: session?.user, jwt: session?.access_token });
      await authStore.persist();
      router.push('/blog');
    } else if (event === 'SIGNED_OUT') {
      await authStore.logout();
      router.push('/login');
    }
  });
});

const isRegisterMode = ref(false);
const confirmationPassword = ref('');
const accept = ref(false);

const onRegisterClick = () => {
  reset();
  isRegisterMode.value = !isRegisterMode.value;
};

//const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
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
  if (isRegisterMode.value) {
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
  errorMessage.message = '';
};
</script>

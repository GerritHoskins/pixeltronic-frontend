<template>
  <div class="login-page pt-[15rem]">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="flex flex-col max-w-[18rem] w-full">
        <div class="my-3">
          <brand-logo />
          <p class="text-lg leading-7 pt-2 pb-4 text-gray-500 dark:text-gray-400">Back already?</p>
        </div>

        <div class="flex flex-col gap-4">
          <div v-if="errorMessage.message" :class="`${errorMessage.color} ${errorMessage.textColor} p-2 mb-4 `">
            {{ errorMessage.message }}
          </div>
          <div class="flex flex-col gap-2" v-if="!isRegisterMode">
            <input v-model="form.email" placeholder="Email" />
            <input type="password" v-model="form.password" placeholder="Password" />
          </div>

          <div class="flex flex-col gap-2" v-if="isRegisterMode">
            <input v-model="form.email" placeholder="Email" />
            <input type="password" v-model="form.password" placeholder="Password" />
            <input type="password" v-model="confirmationPassword" placeholder="Confirm Password" />
          </div>
          <button @click="handleSubmit">{{ isRegisterMode ? 'Register' : 'Login' }}</button>
          <div
            @click="onRegisterClick"
            class="mt-2 cursor-pointer prose max-w-none text-sm text-center text-gray-500 dark:text-gray-400"
          >
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
import { supabase } from '@/main';
import BrandLogo from '@/components/common/BrandLogo.vue';

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

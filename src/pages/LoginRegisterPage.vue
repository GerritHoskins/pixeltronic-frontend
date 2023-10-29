<template>
  <div class="login-register-page">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="flex flex-col sm:max-w-[26rem] w-full">
        <div class="py-8">
          <brand-logo />
          <!-- <p class="text-lg leading-7 pt-2 pb-4 font-bold text-gray-500 dark:text-gray-400">
            {{ route.meta.contentTitle }}
          </p> -->
        </div>

        <login-register-form :register-mode="isRegisterMode" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { supabase } from '@/main';
import BrandLogo from '@/components/common/BrandLogo.vue';
import LoginRegisterForm from '@/components/login/LoginRegisterForm.vue';

const authStore = useUserStore();
const router = useRouter();
const route = useRoute();

const isRegisterMode = computed(() => route.path === '/register');

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

//const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
</script>

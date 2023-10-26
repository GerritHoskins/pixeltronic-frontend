<template>
  <footer>
    <div class="mt-16 flex flex-col items-center">
      <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <router-link :to="{ name: 'logout' }"> Login </router-link>
        <router-link :to="{ name: 'privacy-policy' }"> Privacy policy </router-link>
        <router-link :to="{ name: 'terms-of-use' }"> Terms of use </router-link>
      </div>
    </div>
  </footer>
</template>

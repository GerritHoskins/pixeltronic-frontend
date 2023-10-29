<template>
  <div class="loading-spinner flex justify-center items-center h-full w-full">
    <div
      class="ease-linear loader border-t-primary-500 rounded-full border-4 border-t-4 border-gray-100 h-12 w-12"
    ></div>
  </div>
</template>

<style scoped>
.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

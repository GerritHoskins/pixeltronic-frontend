<template>
  <h1
    class="page-header"
    :class="$q.dark.isActive ? 'text-accent' : 'text-primary'"
  >
    <slot />
  </h1>
</template>

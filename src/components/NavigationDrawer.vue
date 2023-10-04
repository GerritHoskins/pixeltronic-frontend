<template>
  <div v-if="smAndUp" class="tw-flex tw-flex-row tw-gap-8">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      class="!tw-px-2 !tw-text-xs !w-full !tw-font-light hover:!tw-bg-astral-500 hover:!tw-text-astral-50"
      :to="{ name: item.to }"
      >{{ item.title }}</router-link
    >
  </div>
  <v-navigation-drawer permanent>
    <v-list density="compact" class="tw-flex tw-flex-col">
      <router-link
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        class="!tw-px-2 !tw-text-xs !w-full !tw-font-light hover:!tw-bg-astral-500 hover:!tw-text-astral-50"
        :to="{ name: item.to }"
        >{{ item.title }}</router-link
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  smAndUp: boolean
}>()

type MenuOptions = {
  location: string
  offset: string
  transition: string
}

const menuOptions = computed<MenuOptions>(() => ({
  location: props.smAndUp ? 'end' : 'bottom',
  offset: props.smAndUp ? '20' : '8',
  transition: props.smAndUp ? 'fab-transition' : 'slide-y-transition'
}))

const items = [
  { title: 'Home', to: 'home' },
  { title: 'About', to: 'about' },
  { title: 'Login', to: 'login' },
  { title: 'Projects', to: 'projects' }
]
</script>

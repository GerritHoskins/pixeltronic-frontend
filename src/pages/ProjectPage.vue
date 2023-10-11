<template>
  <q-page padding>
    <div class="q-pa-md">
      <h1>
        {{ pageTitle }}
      </h1>
      <q-btn
        :ripple="false"
        color="primary"
        label="list"
        no-caps
        @click="router.push({ name: 'projects' })"
      />
      <q-btn
        :ripple="false"
        dense
        flat
        label="add"
        no-caps
        text-color="primary"
        @click="router.push({ name: 'add-project' })"
      />
      <router-view />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
defineProps<{
  pageTitle: string;
}>();
</script>
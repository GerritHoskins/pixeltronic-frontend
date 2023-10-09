<template>
  <q-footer bordered reveal class="bg-primary text-secondary">
    <q-toolbar>
      <q-list class="fit row wrap justify-center items-center content-center">
        <q-item>
          <router-link :to="{ name: 'privacy-policy' }"
            >Privacy policy</router-link
          >
        </q-item>
        <q-item>
          <router-link :to="{ name: 'terms-of-use' }">Terms of use</router-link>
        </q-item>
        <q-item>
          {{ `${new Date().getFullYear()} pixeltronic.dev` }}
        </q-item>
      </q-list>
    </q-toolbar>
  </q-footer>
</template>

<script setup lang="ts"></script>

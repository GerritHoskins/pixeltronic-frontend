<template>
  <v-container class="projects-view !tw-font-light !tw-p-0">
    <v-row>
      <v-col cols="8">
        <router-view />
      </v-col>
      <v-col cols="4">
        <v-btn color="primary" :to="{ name: 'add-project' }">
          <span>Add project</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

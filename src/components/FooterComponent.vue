<template>
  <v-footer color="background" class="tw-flex tw-flex-col !tw-text-xs !tw-font-light !tw-w-full !tw-p-0" app>
    <div class="tw-flex tw-flex-row">
      <a v-for="socialLink in socialLinks" :key="socialLink.title" :href="socialLink.url" target="_blank">
        <v-icon
          class="mx-4"
          :icon="socialLink.icon"
          variant="plain"
          size="large"
          :aria-label="socialLink.title"
          role="img"
          aria-hidden="false"
          elevation="0"
        >
        </v-icon>
      </a>
    </div>

    <v-list class="!tw-flex !tw-flex-row" bg-color="background" density="compact" variant="text">
      <v-list-item
        v-for="footerLink in footerLinks"
        :key="footerLink.title"
        :aria-label="footerLink.title"
        link
        :ripple="false"
        class="!tw-font-light"
        variant="plain"
        density="compact"
        :to="footerLink.to"
      >
        {{ footerLink.title }}
      </v-list-item>
    </v-list>
  </v-footer>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    title: 'LinkedIn',
    icon: 'mdi-linkedin',
    url: 'https://www.linkedin.com/in/gerrit-hoskins/',
  },
  {
    title: 'GitHub',
    icon: 'mdi-github',
    url: 'https://github.com/GerritHoskins/',
  },
  {
    title: 'Xing',
    icon: 'mdi-alpha-x-box',
    url: 'https://www.xing.com/profile/GerritHoskins/',
  },
];
const footerLinks = [
  {
    title: 'Privacy policy',
    to: 'privacy-policy',
  },
  {
    title: 'Terms and conditions',
    to: 'terms-of-use',
  },
  {
    title: `${new Date().getFullYear()} — pixeltronic.dev`,
    to: 'home',
  },
];
const openLink = (url: string) => window.open(url, '_blank');
</script>

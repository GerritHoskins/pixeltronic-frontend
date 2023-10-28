<template>
  <footer>
    <div class="mt-16 flex flex-col items-center">
      <div class="mb-3 flex flex-row items-center space-x-4">
        <github-icon :svg-props="iconSettings.githubIcon" />
        <linked-in-icon :svg-props="iconSettings.linkedInIcon" />

        <mail-icon :svg-props="iconSettings.mailIcon" />
      </div>

      <div class="mb-2 flex space-x-2 text-gray-500 dark:text-gray-400 text-xs">
        <router-link
          v-for="navItem in navItems"
          :key="navItem.name"
          :to="{ name: navItem.name }"
          :aria-label="`Navigate to ${navItem.label}`"
          >{{ navItem.meta?.contentTitle }}
        </router-link>
        <a target="_blank" rel="noopener noreferrer" href="https://pixeltronic.dev">pixeltronic.dev ©2023</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { NavigationRouterLink } from '@/types/Navigation';
import MailIcon from '@/components/common/icons/MailIcon.vue';
import GithubIcon from '@/components/common/icons/GithubIcon.vue';
import LinkedInIcon from '@/components/common/icons/LinkedInIcon.vue';

defineProps<{
  navItems: Array<NavigationRouterLink>;
}>();

const iconSettings = {
  githubIcon: { width: 18, height: 18, href: 'https://github.com/GerritHoskins' },
  linkedInIcon: { width: 18, height: 18, href: 'https://www.linkedin.com/in/gerrit-hoskins/' },
  mailIcon: { width: 22, height: 22, href: 'mailto:gerrit.hoskins@pixeltronic.dev' },
};
</script>

<template>
  <fwb-footer footer-type="logo">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <fwb-footer-brand
          href="https://WebMasons.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="WebMasons Logo"
          name="WebMasons"
        />
        <fwb-footer-link-group
          class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <fwb-footer-link
            v-for="link in footerNavigationLinks"
            :href="link.href"
          >
            {{ link.text }}
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <fwb-footer-copyright href="/" by="WebMasons" />
    </div>
  </fwb-footer>
</template>

<script setup lang="ts">
const footerNavigationLinks = [
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    text: 'Licensing',
    href: '/licensing',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
];
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
  FwbFooterBrand,
} from 'flowbite-vue';
</script>

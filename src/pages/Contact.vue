<template>
  <div class="q-pa-md">
    <h1>Contact</h1>
    <p>Get in touch with us for any inquiries or support.</p>
  </div>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';

defineOptions({ name: 'ContactPage' });

useMeta({
  title: 'Contact',
  titleTemplate: (title) => `${title} - Quasar SSR App`,
  meta: {
    description: {
      name: 'description',
      content: 'Contact us for inquiries, support, or feedback.',
    },
    keywords: { name: 'keywords', content: 'contact, quasar, ssr, app' },
    ogTitle: { property: 'og:title', content: 'Contact - Quasar SSR App' },
    ogDescription: {
      property: 'og:description',
      content: 'Contact us for inquiries, support, or feedback.',
    },
  },
});
</script>

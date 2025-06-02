<template>
  <div class="q-pa-md">
    <h1>Blog</h1>
    <p>Read our latest articles and updates.</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BlogPage',
  meta() {
    return {
      title: 'Blog - Quasar SSR App',
      meta: [
        {
          name: 'description',
          content: 'Read the latest articles and updates from Quasar SSR App.',
        },
        { property: 'og:title', content: 'Blog - Quasar SSR App' },
        {
          property: 'og:description',
          content: 'Read the latest articles and updates from Quasar SSR App.',
        },
      ],
    };
  },
};
</script>

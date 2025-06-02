<template>
  <div class="q-pa-md">
    <h1>About Us</h1>
    <p>Welcome to our About page. Learn more about our mission and team.</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutPage',
  meta() {
    return {
      title: 'About Us - Quasar SSR App',
      meta: [
        {
          name: 'description',
          content: 'Learn more about our mission and team at Quasar SSR App.',
        },
        { property: 'og:title', content: 'About Us - Quasar SSR App' },
        {
          property: 'og:description',
          content: 'Learn more about our mission and team at Quasar SSR App.',
        },
      ],
    };
  },
};
</script>

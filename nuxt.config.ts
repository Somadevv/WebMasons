// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['./assets/styles/scss/app.scss', '~/assets/styles/css/main.css'],
  components: true,
  image: {
    format: ['webp'],
  },
  modules: ['@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

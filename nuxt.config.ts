// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  publicRuntimeConfig: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    //SUPABASE_URL:
  },
  modules: ["@nuxtjs/tailwindcss"],
});

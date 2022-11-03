// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runRuntimeConfig: {
    public: {
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      SUPABASE_URL: process.env.SUPABASE_URL,
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});

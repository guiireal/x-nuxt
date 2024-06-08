export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  app: {
    head: {
      bodyAttrs: {
        class: "bg-black text-white font-semibold font-mono"
      }
    }
  }
});

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@vueuse/nuxt", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
    },
    display: "swap",
  },

  css: ["~/assets/css/global.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Simbu Teknologi — We Deliver Business Value",
      htmlAttrs: {
        class: "dark",
      },
      meta: [
        {
          name: "description",
          content:
            "PT Simbu Teknologi Indonesia — IT Infrastructure, Cybersecurity, Area Infrastructure & Software Development.",
        },
      ],
    },
  },
});

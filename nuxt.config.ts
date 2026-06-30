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
        { property: "og:title", content: "Simbu Teknologi — We Deliver Business Value" },
        {
          property: "og:description",
          content:
            "End-to-end IT solutions for enterprise — from infrastructure and cybersecurity to custom software development.",
        },
        { property: "og:image", content: "/simbu.png" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Simbu Teknologi — We Deliver Business Value" },
        {
          name: "twitter:description",
          content:
            "End-to-end IT solutions for enterprise — from infrastructure and cybersecurity to custom software development.",
        },
        { name: "twitter:image", content: "/simbu.png" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});

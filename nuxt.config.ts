export default defineNuxtConfig({
  compatibilityDate: "2026-11-15",
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxt/eslint"],
  css: [
    "@fontsource/montserrat/400.css",
    "@fontsource/montserrat/500.css",
    "@fontsource/montserrat/600.css",
    "@fontsource/montserrat/700.css",
    "@fontsource/nunito-sans/400.css",
    "~/assets/css/main.css",
    "~/assets/css/responsive.css",
  ],
  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      title: "WorkFlow — управление заявками",
      meta: [
        {
          name: "description",
          content:
            "Единое рабочее пространство для заявок, команды и понятных процессов.",
        },
      ],
    },
  },
  typescript: { strict: true },
});

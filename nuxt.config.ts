import NuxtConfiguration from "@nuxt/config";

const nuxtConfig: NuxtConfiguration = {
  mode: "universal",
  srcDir: ".",
  env: {},
  head: {
    title: "fex",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js TypeScript project"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/app.css"],
  modules: ["@nuxtjs/axios"],
  axios: {},
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return;
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue|ts)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};

export default nuxtConfig;

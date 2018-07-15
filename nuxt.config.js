require("dotenv").config();
const client = require("./plugins/contentful");
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: "ko",
      class: "has-navbar-fixed-top"
    },
    title: "FERuden",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "프론트엔드 개발지식 나눔 블로그 | javascript, vue, react, es6, webpack, jquery"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
      }
    ]
  },
  css: [
    { src: "~/node_modules/highlight.js/styles/atom-one-dark.css", lang: "css" }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: [
    "~/plugins/contentful",
    { src: "~plugins/ga.js", ssr: false },
    "~/plugins/disqus"
  ],
  modules: ["@nuxtjs/dotenv", "@nuxtjs/markdownit", "@nuxtjs/pwa"],
  markdownit: {
    injected: true,
    use: ["markdown-it-highlightjs"]
  },
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: "blogPost"
        })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: `/blog/${entry.fields.slug}`,
              payload: entry
            };
          });
        });
    }
  }
};

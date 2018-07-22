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
    title: "FERuden | 프론트엔드 개발지식 공유 블로그",
    meta: [
      {
        name: "google-site-verification",
        content: "DFN8ft01giCHJhFJnziWud4POhjvFAcc1NkeT7cbBjE"
      },
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
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/markdownit",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-adsense"
  ],
  markdownit: {
    injected: true,
    use: ["markdown-it-highlightjs"]
  },
  generate: {
    async routes() {
      const { items } = await client.getEntries({ content_type: "blogPost" });

      return items.map(item => ({
        route: `/blog/${item.fields.slug}`,
        payload: item
      }));
    }
  },
  manifest: {
    lang: "ko"
  },
  "google-adsense": {
    id: "ca-pub-2137294472379721",
    pageLevelAds: true
  },
  sitemap: {
    path: "/sitemap.xml",
    generate: true,
    hostname: "https://loving-wright-d0eedb.netlify.com",
    gzip: true,
    async routes() {
      const { items } = await client.getEntries({ content_type: "blogPost" });
      return items.map(item => `/blog/${item.fields.slug}`);
    }
  }
};

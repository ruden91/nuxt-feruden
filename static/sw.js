importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e56227a62ff3dc8da4ba.js",
    "revision": "18d5966d3cd884b6e065d088971d7da6"
  },
  {
    "url": "/_nuxt/layouts/blog.4193b57b7bfd6da65c08.js",
    "revision": "05481777e13f4d8f64c480813bd84808"
  },
  {
    "url": "/_nuxt/layouts/default.8766c33a720326ca67d1.js",
    "revision": "42b1fcf4b905b8405dbdd022b06bc958"
  },
  {
    "url": "/_nuxt/layouts/test.9aadd49a93cf26808154.js",
    "revision": "d61a35bfff40dbaab0fa2bf862474052"
  },
  {
    "url": "/_nuxt/manifest.dc038df7b78f53d42152.js",
    "revision": "f77138dea5d7e9ead85294705958c2a7"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.677cfd07590ea19761e3.js",
    "revision": "bc0fe497efc2672f3464a7cb2a31f8e3"
  },
  {
    "url": "/_nuxt/pages/index.b158075165c3174743ad.js",
    "revision": "f7ca2015b4b2bab61c8b7a4244809fa2"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.403eba2249ec3a74f3e2.js",
    "revision": "db7392cc16f74b7fe2348caca13a3ba3"
  },
  {
    "url": "/_nuxt/pages/test/index.63bdd55edc6c57394b90.js",
    "revision": "3333632bf54dd60421d474598b090546"
  },
  {
    "url": "/_nuxt/vendor.4c0421d1f991c542fc8b.js",
    "revision": "d1d05f345ac1d1b79bdec4dd3e0c56a2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


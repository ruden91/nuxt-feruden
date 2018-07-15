importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f814fe850c323f5329e4.js",
    "revision": "25425b920a84823c074e67ae773923c4"
  },
  {
    "url": "/_nuxt/layouts/default.48bfb66d54732f996c55.js",
    "revision": "1e2ab9a277674cb18e4ddcd5da9a869d"
  },
  {
    "url": "/_nuxt/manifest.30fb4287714a6b68c71b.js",
    "revision": "a54fc39f13ec86a4b79323ae9c867191"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.d6899f63ce7578d04c9e.js",
    "revision": "4d88868fefd9994d183c833f0a83e41c"
  },
  {
    "url": "/_nuxt/pages/index.23300f349322f173e2c6.js",
    "revision": "31ab84563529af7fad414c89686fd3f4"
  },
  {
    "url": "/_nuxt/vendor.6a6335c0842180015b30.js",
    "revision": "9d5365295f1342bce1af50c8a99e023f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


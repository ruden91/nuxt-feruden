importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.829adebf06c804524995.js",
    "revision": "85360ed11303f4a5164965e6135e7c48"
  },
  {
    "url": "/_nuxt/layouts/default.c5054e30ece3e7c7592b.js",
    "revision": "fb79a4f003825926c2224d4f2f762837"
  },
  {
    "url": "/_nuxt/manifest.9cd79c8f618e2df8f2e1.js",
    "revision": "83f8284cfb1d9fcd9c137e5f7bff2203"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.1cd85bef4852165bd967.js",
    "revision": "baa294a44d318cbcc21a9b92eb86caf9"
  },
  {
    "url": "/_nuxt/pages/index.dd7dcc8b21147bc1e7f1.js",
    "revision": "23a743ccdc111d292d4351a75215b33b"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.ec0c5bc27e4be8843b62.js",
    "revision": "eb6d267dc5c2b0966610ac19f448fc7a"
  },
  {
    "url": "/_nuxt/vendor.3ac1b183e39b77ee6753.js",
    "revision": "b51f3e6ad0eb0355e1b9b8735a43f839"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


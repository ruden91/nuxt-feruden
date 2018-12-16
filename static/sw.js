importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "VIEW",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.04ba5cf9124b304bae3d.js",
    "revision": "d1da2ed9da88718ad41d7822a1404c59"
  },
  {
    "url": "/_nuxt/layouts/blog.225765a9758cb105dc28.js",
    "revision": "a6e0641907f9cd10d53abd64abae892e"
  },
  {
    "url": "/_nuxt/layouts/default.74cdef2ce8d42cfb75b2.js",
    "revision": "48a69cd8c732fc65e45efec40451a875"
  },
  {
    "url": "/_nuxt/layouts/test.9aadd49a93cf26808154.js",
    "revision": "d61a35bfff40dbaab0fa2bf862474052"
  },
  {
    "url": "/_nuxt/manifest.47c7dba38ae4ec1b4f45.js",
    "revision": "d9ee9572101df0118494951cdaf13743"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.2ec79733272c719d42ad.js",
    "revision": "cbf2b875eb173f96eae845af68069f0e"
  },
  {
    "url": "/_nuxt/pages/index.23a3b2d314dae28d131c.js",
    "revision": "6f6c87e41bc2d00a23a2b0afc26589cb"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.7d88b770ae2fd2e49781.js",
    "revision": "db7392cc16f74b7fe2348caca13a3ba3"
  },
  {
    "url": "/_nuxt/pages/test/index.63bdd55edc6c57394b90.js",
    "revision": "3333632bf54dd60421d474598b090546"
  },
  {
    "url": "/_nuxt/vendor.0d2404c6592b2af2f6d7.js",
    "revision": "b8c19048f8d4a33446df9658ebff9e6d"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


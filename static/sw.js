importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "VIEW",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c472b9c24e69feda975b.js",
    "revision": "c6668a3083d9d4bfe935747b01f3877d"
  },
  {
    "url": "/_nuxt/layouts/blog.225765a9758cb105dc28.js",
    "revision": "a6e0641907f9cd10d53abd64abae892e"
  },
  {
    "url": "/_nuxt/layouts/default.e8a58142113f97986332.js",
    "revision": "fbba3470e8c9a58e019ace86371aa9bf"
  },
  {
    "url": "/_nuxt/layouts/test.9aadd49a93cf26808154.js",
    "revision": "d61a35bfff40dbaab0fa2bf862474052"
  },
  {
    "url": "/_nuxt/manifest.d623df4fca7e107361a2.js",
    "revision": "d8b45e408dbc9ce6c938b464942d9761"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.2ec79733272c719d42ad.js",
    "revision": "cbf2b875eb173f96eae845af68069f0e"
  },
  {
    "url": "/_nuxt/pages/index.5a213f56b04a107ed38f.js",
    "revision": "86f14dcc05daaabc0fb4b732fc4ad7ab"
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


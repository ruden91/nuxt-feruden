importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2dc56a682f31e6baa97e.js",
    "revision": "14b9856b216d8afadf6ebfc75e2db578"
  },
  {
    "url": "/_nuxt/layouts/default.57377112e38fe836755d.js",
    "revision": "0741ee87d422b4fe5c04c94ddc12c46c"
  },
  {
    "url": "/_nuxt/manifest.29ce744d0cf0bc31037e.js",
    "revision": "0b28b84ae7b03732f1350bbc662b6a39"
  },
  {
    "url": "/_nuxt/pages/_slug.0b5505d0e1bb7008910c.js",
    "revision": "5c60205489449cca5aac47ef89a710cb"
  },
  {
    "url": "/_nuxt/pages/index.11a8bc43d549d336acc0.js",
    "revision": "1f9963ba1da41c2ea2f0d85d0f5a8a42"
  },
  {
    "url": "/_nuxt/vendor.3ffa7699303977e3f747.js",
    "revision": "5c7cc7e6de1f2634f3d9e8006297c964"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


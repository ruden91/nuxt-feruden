importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "feruden-blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.97d0d41ea1c412e00609.js",
    "revision": "70e5991cdc506e0df5747f7feee5a3b7"
  },
  {
    "url": "/_nuxt/layouts/default.57377112e38fe836755d.js",
    "revision": "0741ee87d422b4fe5c04c94ddc12c46c"
  },
  {
    "url": "/_nuxt/manifest.9e437f5440eada9ebf8a.js",
    "revision": "2f3db2d807d1139ba872a5dce1d93c3d"
  },
  {
    "url": "/_nuxt/pages/_slug.044824cfdb86390d8318.js",
    "revision": "10ae795972992a85d032e151b98e2434"
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


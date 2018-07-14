importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c19cc3ad178a5acedbeb.js",
    "revision": "c0f43b544469ff12714bc4492863d08b"
  },
  {
    "url": "/_nuxt/layouts/default.6b2374e5c06be404f6e4.js",
    "revision": "93b4f2cff303784ace6188e7004be7c1"
  },
  {
    "url": "/_nuxt/manifest.d480d8a9c11de7e31e98.js",
    "revision": "566b28c7e3fcc736f4a0f557a029585e"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.de35866cb61f6e7542cd.js",
    "revision": "62196a305570705f0e8ca002ed725b07"
  },
  {
    "url": "/_nuxt/pages/index.22066ca9a5bb987062bd.js",
    "revision": "87e5f82c8eb635333b91b0b67d45c9b4"
  },
  {
    "url": "/_nuxt/vendor.3ffa7699303977e3f747.js",
    "revision": "5c7cc7e6de1f2634f3d9e8006297c964"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


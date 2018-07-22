importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.abf7bf708f4515b9531e.js",
    "revision": "b6e497d8df384db92894f669e6dee300"
  },
  {
    "url": "/_nuxt/layouts/default.dae4715d929d5bff4154.js",
    "revision": "d50859d6140ceee042f2909980656bd5"
  },
  {
    "url": "/_nuxt/manifest.c91d9ae7d02e2ceee474.js",
    "revision": "9fc3c3d8c75f0b49e3eb986cc30f7b64"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.52c7cda132b888df1ae5.js",
    "revision": "6207e953f107abbcf53064d11e1b052f"
  },
  {
    "url": "/_nuxt/pages/index.1b4e1ee8509ae3e42441.js",
    "revision": "fadff0fa946429b311a093afe91bdb09"
  },
  {
    "url": "/_nuxt/vendor.6a6335c0842180015b30.js",
    "revision": "9d5365295f1342bce1af50c8a99e023f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


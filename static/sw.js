importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.98b7418bb367c1f660ea.js",
    "revision": "1e23dc94fa2c9ef962756bf59f1c6523"
  },
  {
    "url": "/_nuxt/layouts/default.b4fde3ea12bd0246157c.js",
    "revision": "2ea73cec948ed3e3f300154cdfb12db5"
  },
  {
    "url": "/_nuxt/manifest.e8058b4ad0b2d452d718.js",
    "revision": "9883e17bfbdebf632eb30dbc04df2232"
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


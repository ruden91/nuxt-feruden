importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.46a7f742fbf1954e07fb.js",
    "revision": "ff5eca07e9365d0f54d06dd7decddadf"
  },
  {
    "url": "/_nuxt/layouts/default.b4fde3ea12bd0246157c.js",
    "revision": "2ea73cec948ed3e3f300154cdfb12db5"
  },
  {
    "url": "/_nuxt/manifest.3ef754e8a78d8fb9fc78.js",
    "revision": "228e6e7f992f6928f4ee4e592b1f41be"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.52c7cda132b888df1ae5.js",
    "revision": "6207e953f107abbcf53064d11e1b052f"
  },
  {
    "url": "/_nuxt/pages/index.77b0d2d028854187c2f5.js",
    "revision": "12627200cebd8ddf8398503d6f52411b"
  },
  {
    "url": "/_nuxt/vendor.6a6335c0842180015b30.js",
    "revision": "9d5365295f1342bce1af50c8a99e023f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


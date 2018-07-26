importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.fd3f042f0274f069275e.js",
    "revision": "fc20a1eb4923262bbb37514f4a978a77"
  },
  {
    "url": "/_nuxt/layouts/default.e97b9090cf2879ac86de.js",
    "revision": "bd62771d4e973ba48f6c9b68027310de"
  },
  {
    "url": "/_nuxt/manifest.a671d021c39065f29490.js",
    "revision": "6d3013f958358073c547be8e8641fa77"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.a585eeee3cdc950f621e.js",
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
    "url": "/_nuxt/vendor.f17e1b1947599b2693af.js",
    "revision": "1409cc61de1934e2a9a27a1503959a5d"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


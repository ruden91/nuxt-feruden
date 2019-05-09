importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "VIEW",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.d8e16b5b57450a5257cf.js",
    "revision": "2e8b6f7a21267b8884764df365defa4f"
  },
  {
    "url": "/_nuxt/layouts/blog.bfb4bd64a9f212b95e28.js",
    "revision": "9ba14f5e7f26e854e150ef0378aab429"
  },
  {
    "url": "/_nuxt/layouts/default.75ddf4563ead26cf0c81.js",
    "revision": "8187733d9b150811e664f78bad943ca6"
  },
  {
    "url": "/_nuxt/layouts/test.a056c29f35af9ca039da.js",
    "revision": "12c12d8b763f0739862c51f615a787f9"
  },
  {
    "url": "/_nuxt/manifest.9a8e39af5c88bb3c3a85.js",
    "revision": "a6aa77c4f1bb72fb308f0133a28878f5"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.bfafab025eb099e40e67.js",
    "revision": "d2eece805177c4be8f7486d3f085ae5c"
  },
  {
    "url": "/_nuxt/pages/index.33a89e273d8136ece247.js",
    "revision": "6c7aa9b388363be7d3e4d35adc305356"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.c27c0b617f2dee80f94d.js",
    "revision": "3863248f574cf32f5fe60ad628a063d0"
  },
  {
    "url": "/_nuxt/pages/test/index.99f740951d175b2b3936.js",
    "revision": "7c4b0763b2b5440796b8ac8e5f0e9d2f"
  },
  {
    "url": "/_nuxt/vendor.0d2404c6592b2af2f6d7.js",
    "revision": "b8c19048f8d4a33446df9658ebff9e6d"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.56d7610e5b47f2d3ed11.js",
    "revision": "895d3a70c26ebe5b2e5b31c3e6790b9a"
  },
  {
    "url": "/_nuxt/layouts/default.e64007e14097ef44919b.js",
    "revision": "f7ec00e52b412e66c2ca67c6419407ee"
  },
  {
    "url": "/_nuxt/manifest.d9239e64c82dfddf630a.js",
    "revision": "0b605117e164a3e31fd28b27c4f062ae"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.5e0f7709b69f8c0aae3d.js",
    "revision": "2740a4c1a0ea3f032e4b12f0085f3479"
  },
  {
    "url": "/_nuxt/pages/index.d9189cdca12b5cc2a424.js",
    "revision": "b93bfed6914b818ca426afd4b70d7be0"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.3ce409a92895fd73588b.js",
    "revision": "84da4a5886cef682f337f02962bb069f"
  },
  {
    "url": "/_nuxt/vendor.aa582ccb53c3ed478498.js",
    "revision": "e371d1d2f8cdedfc5e4d0da12591bf89"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.83e08ccafd845d9ead69.js",
    "revision": "d1f95aee545219f4f12ee301c99fab5a"
  },
  {
    "url": "/_nuxt/layouts/default.5fd50af369b715c76636.js",
    "revision": "65e5306b0a3d13741a38a50be964aa58"
  },
  {
    "url": "/_nuxt/manifest.31e72706813e0d7fe97d.js",
    "revision": "37c8992c6d58839e6747fb4d9c875b7f"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.9ec65df6e1b92279c0b0.js",
    "revision": "610c506f83f96cef41cfe7eeb9bdc7b6"
  },
  {
    "url": "/_nuxt/pages/index.d24b0aab0ba6b2c25b1b.js",
    "revision": "a04a1392a0e62717197fb81ed16c5841"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.25a6986caef29e07da03.js",
    "revision": "da72632fa49ee0d0452943d60d8a7e06"
  },
  {
    "url": "/_nuxt/vendor.3ac1b183e39b77ee6753.js",
    "revision": "b51f3e6ad0eb0355e1b9b8735a43f839"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


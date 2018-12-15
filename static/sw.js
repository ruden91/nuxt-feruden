importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.85cbe492cf0f9cd9b85b.js",
    "revision": "81cd894eaeadf2eeb8a50573a6e82cc2"
  },
  {
    "url": "/_nuxt/layouts/default.09e09ab421a9ce4416ec.js",
    "revision": "fcbb6b0c565fb1e24c732a31695e5feb"
  },
  {
    "url": "/_nuxt/manifest.3a954bb887a2f6670277.js",
    "revision": "f510810ef412cbe2a8cfcecdb4d8576f"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.1abfe7d99fc72fc4c5c4.js",
    "revision": "d19ac82c812634bf67851650c3fca66a"
  },
  {
    "url": "/_nuxt/pages/index.21c5d5bab247819bc05d.js",
    "revision": "a0f57ada0a5cc6cb83916ef9883ad73e"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.2512f7d66649ad2de24a.js",
    "revision": "d2392be42dbd95efabe36503ecf51be5"
  },
  {
    "url": "/_nuxt/vendor.3ac1b183e39b77ee6753.js",
    "revision": "b51f3e6ad0eb0355e1b9b8735a43f839"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


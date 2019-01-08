importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "VIEW",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.1fbc71a7c1d9e04f5bc1.js",
    "revision": "a928e45dbc23f0c1f7b29ff603970f4b"
  },
  {
    "url": "/_nuxt/layouts/blog.1edd909ad7c648b8fca1.js",
    "revision": "3c4909bd78c5e4d3dba77c19253c0f63"
  },
  {
    "url": "/_nuxt/layouts/default.f617fbe4355f50f26494.js",
    "revision": "1dfd26f8ca018a0236fa20fa2b4b7763"
  },
  {
    "url": "/_nuxt/layouts/desktopDefault.eef1754d46fac765df2b.js",
    "revision": "01a10fe18d077222adba038f8fad77fd"
  },
  {
    "url": "/_nuxt/layouts/mobileDefault.5591213b0322b70f9f3b.js",
    "revision": "073906a1b093d3cb06288760d5f8632b"
  },
  {
    "url": "/_nuxt/layouts/test.f8f7c5722625b72679f5.js",
    "revision": "0ef7b146c7d756f9a6a70624c2e9dbde"
  },
  {
    "url": "/_nuxt/manifest.c0b26433de9980598c73.js",
    "revision": "6c27fc24b4ffd1d7bfe2cc244c850e1d"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.d220410105d5244aea4f.js",
    "revision": "d559b231cd66619893f90345ee5ed012"
  },
  {
    "url": "/_nuxt/pages/index.b720c1bfe95da8f6f36f.js",
    "revision": "68c29452aadbaa3fbdb84b6303d6f561"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.a6357f223c3ed47c3978.js",
    "revision": "2df1f2d5457e75fdf540309a9c5077e3"
  },
  {
    "url": "/_nuxt/pages/test/index.4ce386b7928f3ece47df.js",
    "revision": "e8d0382cde260a084a8d0f445673f07d"
  },
  {
    "url": "/_nuxt/vendor.27c04c9bfd18f58c6531.js",
    "revision": "54f129cc0f68324c997bc32192d9f14f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


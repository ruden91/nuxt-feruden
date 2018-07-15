importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.ce4535e8af991134bae0.js",
    "revision": "b62d28b0c6832a2759c0ed986d41268a"
  },
  {
    "url": "/_nuxt/layouts/default.48bfb66d54732f996c55.js",
    "revision": "1e2ab9a277674cb18e4ddcd5da9a869d"
  },
  {
    "url": "/_nuxt/manifest.566ea4f1ad0c733a59d0.js",
    "revision": "736548e4fcd751ef3dd633388c9d3cc5"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.f60409dbb8a7f2c9a17b.js",
    "revision": "a416a470ea55edc6bfb4d4e7327b0a93"
  },
  {
    "url": "/_nuxt/pages/index.2a3445317410ef858f90.js",
    "revision": "c6393ab9505a3cc67113e774bd57df7d"
  },
  {
    "url": "/_nuxt/vendor.61ca6251e7caebefe45d.js",
    "revision": "3d413b748d48d6a3da86ad78c51db530"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FERuden",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.9decba182bf9bd837b39.js",
    "revision": "d694e508ce4d16ef218c8f6d164ad663"
  },
  {
    "url": "/_nuxt/layouts/default.48bfb66d54732f996c55.js",
    "revision": "1e2ab9a277674cb18e4ddcd5da9a869d"
  },
  {
    "url": "/_nuxt/manifest.46585e5666ce194662bb.js",
    "revision": "847f1c478d0313595b68f911a5f3bfef"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.e6476beed113e5419e0a.js",
    "revision": "395810368a4fb4e7a1ce61770c472075"
  },
  {
    "url": "/_nuxt/pages/index.2a3445317410ef858f90.js",
    "revision": "c6393ab9505a3cc67113e774bd57df7d"
  },
  {
    "url": "/_nuxt/vendor.6a6335c0842180015b30.js",
    "revision": "9d5365295f1342bce1af50c8a99e023f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


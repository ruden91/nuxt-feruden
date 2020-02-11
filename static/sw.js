importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "VIEW",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f5d1e76419c1d403ba9e.js",
    "revision": "45147545687e88da5f564b244247d32e"
  },
  {
    "url": "/_nuxt/layouts/default.be08a793687c83b18674.js",
    "revision": "fcc35f66cdedb6ad28ef4500fa18333e"
  },
  {
    "url": "/_nuxt/layouts/desktop/blog.8d5c371a87d793b24d30.js",
    "revision": "62328d0bc970f6c1e3e3026eb3b7c28f"
  },
  {
    "url": "/_nuxt/layouts/desktop/default.6afa8ae0a10a959a578f.js",
    "revision": "1847d6b1e6b0dbc555ffe24c33886266"
  },
  {
    "url": "/_nuxt/layouts/mobile/blog.a8055f128e8b8911756f.js",
    "revision": "bc7080a25c10e254e1b5aa00111e05f7"
  },
  {
    "url": "/_nuxt/layouts/mobile/default.deeb4d42cd818078d8b2.js",
    "revision": "6ee455feafa581256a48d1bdd3801a6e"
  },
  {
    "url": "/_nuxt/layouts/test.a2f3b5406566760b9df5.js",
    "revision": "0c675831345a396d3aec3552a0626639"
  },
  {
    "url": "/_nuxt/manifest.3088f86d9bbd9c7870ca.js",
    "revision": "06ec0f4f83c4a6761674e90464ae65d6"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.e7c0a05df4054dda339a.js",
    "revision": "0a3b151e2f2dfe40d9a638007b81c919"
  },
  {
    "url": "/_nuxt/pages/categories/_category.d5ea331f9ec7d852f6dc.js",
    "revision": "b0bf1d2d5add0db505dda190958469f4"
  },
  {
    "url": "/_nuxt/pages/index.098fb9670a9a226cdc1d.js",
    "revision": "d26bc866dd02ae2ea8496ed9df81bc18"
  },
  {
    "url": "/_nuxt/pages/tags/_tag.1ce567b7104506645656.js",
    "revision": "e8b9d1736981485d36426305200e83b4"
  },
  {
    "url": "/_nuxt/pages/test/index.ac7d7ce0f4128ff39d66.js",
    "revision": "606a2a101bcf5005dccb2c521dd6f8e9"
  },
  {
    "url": "/_nuxt/vendor.3127308d49552bdee352.js",
    "revision": "96d46bdb10588e4ec6b893c5aa1afcec"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


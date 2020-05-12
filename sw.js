/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-fc4b161f0506d28144f8.js"
  },
  {
    "url": "framework-f47b549d6f237f17b5e3.js"
  },
  {
    "url": "app-287afb106bbd3778cab8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "464ed50d698f99baa0a474e0294dc151"
  },
  {
    "url": "google-fonts/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2",
    "revision": "d15ba972040b09041a17f6a751282dcb"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-9c50b6c1c5279b38652d.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "841872b4debba6a9641af295e46f891f"
  },
  {
    "url": "styles.cdbefcf032504d410e50.css"
  },
  {
    "url": "styles-d3259afcef90844d6efd.js"
  },
  {
    "url": "1bfc9850-aede54f535e63efb202f.js"
  },
  {
    "url": "dc7e437b2e9c55583b2fd4fb5aa9945cc297de1f-d008b9cc9ccccca9c7f8.js"
  },
  {
    "url": "component---src-pages-404-js-ccecfba08aaad8df6604.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "component---src-pages-about-js-bd30377927c67fe644fd.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3ddd5d51b095997b4d473ef99898912f"
  },
  {
    "url": "37ecca4ea4e3dda795841a1da2198669b2fde9be-b5351e10bf8c429e1a09.js"
  },
  {
    "url": "dd6dbfc1f11b3bf72e16737657f006c597b3f4aa-2da243b15ca92fa6a3ed.js"
  },
  {
    "url": "component---src-pages-academy-js-607a28b765412f7b5968.js"
  },
  {
    "url": "page-data/academy/page-data.json",
    "revision": "802b9b1abc5174a4ec4aaa21c09bb364"
  },
  {
    "url": "2ce06fe6a3b448c8dffc9bfbeb3a45dd7e1e86d9-8576a2c1a8177aa5705b.js"
  },
  {
    "url": "component---src-pages-academygrad-js-d0a0f755288f19092a8b.js"
  },
  {
    "url": "page-data/academygrad/page-data.json",
    "revision": "da10be4f1e14c69912c783c38c22539c"
  },
  {
    "url": "component---src-pages-courses-js-aa627e17ec73fb1a10a8.js"
  },
  {
    "url": "page-data/courses/page-data.json",
    "revision": "4c55b0a37587ffa7dc418322d0e7972d"
  },
  {
    "url": "component---src-pages-index-js-535885cd2b7fe98353d1.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1fb79e6fc14d98f88dd9e5819fe647f5"
  },
  {
    "url": "component---src-pages-livestream-js-5e29112268fa42956de4.js"
  },
  {
    "url": "page-data/livestream/page-data.json",
    "revision": "01027a9290b2df11ac2b79ce73d7a9d1"
  },
  {
    "url": "component---src-pages-newgrad-js-8c9e8bff3cad43e255d2.js"
  },
  {
    "url": "page-data/newgrad/page-data.json",
    "revision": "2f5320de9811980d894fee1733ca8d72"
  },
  {
    "url": "component---src-pages-register-js-ee736f46d2aaa58b264f.js"
  },
  {
    "url": "page-data/register/page-data.json",
    "revision": "5268465e7a2db1b91e8ccc4d43d47fe2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "50993439975a4470f5577270c4191b8b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-287afb106bbd3778cab8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

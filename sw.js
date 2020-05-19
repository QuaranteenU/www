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
    "url": "webpack-runtime-3cbae32356e31ce65ada.js"
  },
  {
    "url": "framework-f47b549d6f237f17b5e3.js"
  },
  {
    "url": "app-a3dd9bc335237f890b67.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ec465b50c6f34b40171a9a56ecfe215e"
  },
  {
    "url": "google-fonts/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2",
    "revision": "d15ba972040b09041a17f6a751282dcb"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e00da1ea3e7fe3ae77e6.js"
  },
  {
    "url": "styles.38f88ec532e973e58b29.css"
  },
  {
    "url": "1bfc9850-aede54f535e63efb202f.js"
  },
  {
    "url": "component---src-pages-404-js-a70d3319481d40aa4551.js"
  },
  {
    "url": "788675e8132e677a8fb4756ef1095a7138c12703-c5bbfe71ba4b5aad479b.js"
  },
  {
    "url": "styles-d3259afcef90844d6efd.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6acb41529a42555543ca205e1c3998b5"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "component---src-pages-about-js-823149d96963698574be.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3ddd5d51b095997b4d473ef99898912f"
  },
  {
    "url": "component---src-pages-academy-js-eaa1e6c39e0b0d1402ce.js"
  },
  {
    "url": "page-data/academy/page-data.json",
    "revision": "802b9b1abc5174a4ec4aaa21c09bb364"
  },
  {
    "url": "component---src-pages-academygrad-js-6570d9134257b863bf6c.js"
  },
  {
    "url": "page-data/academygrad/page-data.json",
    "revision": "da10be4f1e14c69912c783c38c22539c"
  },
  {
    "url": "component---src-pages-courses-js-10e9f9d661ba612c7f3a.js"
  },
  {
    "url": "page-data/courses/page-data.json",
    "revision": "4c55b0a37587ffa7dc418322d0e7972d"
  },
  {
    "url": "937911d241d7f3ea2546b91f06eb775f38ce2a9b-219cf9d5a66c9729d69d.js"
  },
  {
    "url": "component---src-pages-index-js-29785b0a1651ce4ca5ee.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1fb79e6fc14d98f88dd9e5819fe647f5"
  },
  {
    "url": "component---src-pages-instructions-js-dcea76783fa61d09bf5e.js"
  },
  {
    "url": "page-data/instructions/page-data.json",
    "revision": "98639e9a908cbbbcfc140ae5b57c32a5"
  },
  {
    "url": "component---src-pages-livestream-js-f558586e120df94ac997.js"
  },
  {
    "url": "page-data/livestream/page-data.json",
    "revision": "01027a9290b2df11ac2b79ce73d7a9d1"
  },
  {
    "url": "component---src-pages-newgrad-js-6e5351625631f9028ee9.js"
  },
  {
    "url": "page-data/newgrad/page-data.json",
    "revision": "2f5320de9811980d894fee1733ca8d72"
  },
  {
    "url": "component---src-pages-register-js-4f33edfa635621fee95b.js"
  },
  {
    "url": "page-data/register/page-data.json",
    "revision": "5268465e7a2db1b91e8ccc4d43d47fe2"
  },
  {
    "url": "component---src-pages-schedule-js-5945b24d777c55c48a2c.js"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "7d864e3067095cb48658593b0773b972"
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
  if (!resources || !(await caches.match(`/app-a3dd9bc335237f890b67.js`))) {
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

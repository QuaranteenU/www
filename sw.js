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
    "url": "webpack-runtime-922693653b9401fe1352.js"
  },
  {
    "url": "commons-ca2fe3ecbd13662c5161.js"
  },
  {
    "url": "app-12f3a228500cab44a8a6.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "806394376f37970eb7fa4fe846407780"
  },
  {
    "url": "google-fonts/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2",
    "revision": "d15ba972040b09041a17f6a751282dcb"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0159bb149368cfb6a796.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "1f31b209856d0bf4ac1b5596efb89b35"
  },
  {
    "url": "styles.cdbefcf032504d410e50.css"
  },
  {
    "url": "styles-4bd7b0764b3539f778ff.js"
  },
  {
    "url": "component---src-pages-404-js-ca730f9c48259c47cda1.js"
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
    "url": "component---src-pages-about-js-c338b798cba8536701a0.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3ddd5d51b095997b4d473ef99898912f"
  },
  {
    "url": "component---src-pages-academy-js-6ca363357c03e5f953d0.js"
  },
  {
    "url": "page-data/academy/page-data.json",
    "revision": "802b9b1abc5174a4ec4aaa21c09bb364"
  },
  {
    "url": "component---src-pages-courses-js-d36af88a6878574e1f83.js"
  },
  {
    "url": "page-data/courses/page-data.json",
    "revision": "4c55b0a37587ffa7dc418322d0e7972d"
  },
  {
    "url": "component---src-pages-index-js-0cb1abbbdb3eac44ab4c.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "component---src-pages-livestream-js-91360048b2d40fa13695.js"
  },
  {
    "url": "page-data/livestream/page-data.json",
    "revision": "01027a9290b2df11ac2b79ce73d7a9d1"
  },
  {
    "url": "component---src-pages-register-js-8899aa770844341885ba.js"
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
  if (!resources || !(await caches.match(`/app-12f3a228500cab44a8a6.js`))) {
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

"use strict";

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/client.js",
  //'/scripts/install.js',
  "/scripts/luxon-1.11.4.js",
  "/manifest.json",
  "/images/android-icon-144x144.png",
  "/images/android-icon-192x192.png",
  "/images/android-icon-36x36.png",
  "/images/android-icon-48x48.png",
  "/images/android-icon-512x512.png",
  "/images/android-icon-72x72.png",
  "/images/android-icon-96x96.png",
  "/images/apple-icon-114x114.png",
  "/images/apple-icon-120x120.png",
  "/images/apple-icon-144x144.png",
  "/images/apple-icon-152x152.png",
  "/images/apple-icon-180x180.png",
  "/images/apple-icon-57x57.png",
  "/images/apple-icon-60x60.png",
  "/images/apple-icon-72x72.png",
  "/images/apple-icon-76x76.png",
  "/images/apple-icon-precomposed.png",
  "/images/apple-icon.png",
  "/images/favicon-16x16.png",
  "/images/favicon-32x32.png",
  "/images/favicon-96x96.png",
  "/images/favicon.ico",
  "/images/ms-icon-144x144.png",
  "/images/ms-icon-150x150.png",
  "/images/ms-icon-310x310.png",
  "/images/ms-icon-70x70.png"
];

const CACHE_NAME = "static-cache-v6";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", evt => {
  console.log("[ServiceWorker] Install");

  //precache static resources
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", evt => {
  console.log("[ServiceWorker] Activate");

  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", evt => {
  console.log("[ServiceWorker] Fetch", evt.request.url);
  28;
  if (
    evt.request.url.includes("/api.icndb.com/") ||
    evt.request.url.includes("/api.chucknorris.io/") ||
    evt.request.url.includes("/official-joke-api.appspot.com/") ||
    evt.request.url.includes("/api.php?amount=1") ||
    evt.request.url.includes("/random.json?language=en") ||
    evt.request.url.includes("/edge/") ||
    evt.request.url.includes("/breeds/") ||
    evt.request.url.includes("/facts/dog") ||
    evt.request.url.includes("/api.quotable.io/random") ||
    evt.request.url.includes("/thesimpsonsquoteapi.glitch.me/") ||
    evt.request.url.includes("/facts/cat") ||
    evt.request.url.includes("/facts/panda") ||
    evt.request.url.includes("/facts/fox") ||
    evt.request.url.includes("/facts/bird") ||
    evt.request.url.includes("/facts/koala") ||
    evt.request.url.includes("/cat-fact.herokuapp.com/") ||
    evt.request.url.includes("/meme") ||
    evt.request.url.includes("/pikachuimg") ||
    evt.request.url.includes("/hug") ||
    evt.request.url.includes("/pat") ||
    evt.request.url.includes("/wink") ||
    evt.request.url.includes("/img/koala") ||
    evt.request.url.includes("/img/panda") ||
    evt.request.url.includes("/img/red_panda") ||
    evt.request.url.includes("/img/birb") ||
    evt.request.url.includes("/img/fox") ||
    evt.request.url.includes("/img/cat") ||
    evt.request.url.includes("/img/dog")
  ) {
    console.log("[Service Worker] Fetch (data)", evt.request.url);
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }
            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      })
    );
    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});

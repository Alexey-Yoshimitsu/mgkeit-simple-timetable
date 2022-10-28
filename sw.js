//const staticCacheName = 's-app-v3'
//const dynamicCacheName = 'd-app-v3'
//
//const assetUrls = [
//  'index.html',
//  '/js/app.js',
//  '/css/styles.css',
//  'offline.html'
//]
//
//self.addEventListener('install', async event => {
//  const cache = await caches.open(staticCacheName)
//  await cache.addAll(assetUrls)
//})
//
//self.addEventListener('activate', async event => {
//  const cacheNames = await caches.keys()
//  await Promise.all(
//    cacheNames
//      .filter(name => name !== staticCacheName)
//      .filter(name => name !== dynamicCacheName)
//      .map(name => caches.delete(name))
//  )
//})
//
//self.addEventListener('fetch', event => {
//  const {request} = event
//
//  const url = new URL(request.url)
//  if (url.origin === location.origin) {
//    event.respondWith(cacheFirst(request))
//  } else {
//    event.respondWith(networkFirst(request))
//  }
//})
//
//
//async function cacheFirst(request) {
//  const cached = await caches.match(request)
//  return cached ?? await fetch(request)
//}
//
//async function networkFirst(request) {
//  const cache = await caches.open(dynamicCacheName)
//  try {
//    const response = await fetch(request)
//    await cache.put(request, response.clone())
//    return response
//  } catch (e) {
//    const cached = await cache.match(request)
//    return cached ?? await caches.match('/offline.html')
//  }
//}

---
layout: none
---
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

//workbox.core.setCacheNameDetails({
//  prefix: 'svrooij.io',
//  suffix: '{{ site.time | date: "%Y-%m" }}'
//});

registerRoute(
  '/',
  new NetworkFirst()
);

registerRoute(
  /page[0-99]/,
  new NetworkFirst()
)

registerRoute(
  new RegExp('/\\d{4}/\\d{2}/\\d{2}/.+'),
  new StaleWhileRevalidate()
)
//
//workbox.precaching.precacheAndRoute([
//  {% for post in site.posts limit:12 -%}
//  { url: '{{ post.url }}', revision: '{{ post.date | date: "%Y-%m-%d"}}' },
//  {% endfor -%}
//  { url: '/', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
//  { url: '/page2', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
//  { url: '/page3', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
//  { url: '/assets/css/index.css', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' }
//])
//

//
//registerRoute(
//  ({request}) => request.destination === 'image' ,
//  new CacheFirst({
//    plugins: [
//      new CacheableResponse({statuses: [0, 200]})
//    ],
//  })
//);
//
//registerRoute(
//  /assets\/(images|icons|css)/,
//  new CacheFirst()
//);

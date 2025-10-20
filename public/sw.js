const CACHE = "bsons-invest-v1";
const OFFLINE_ROUTES = ["/invest-app", "/resources/investment-guide"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(["/invest-app", "/invest.jpg", "/hero.jpg"].concat(OFFLINE_ROUTES))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  event.respondWith(
    caches.match(request).then((cached) =>
      cached ||
      fetch(request).then((resp) => {
        const respClone = resp.clone();
        caches.open(CACHE).then((cache) => {
          // Only cache same-origin GETs
          if (request.url.startsWith(self.location.origin)) {
            cache.put(request, respClone);
          }
        });
        return resp;
      }).catch(() => caches.match("/invest-app"))
    )
  );
});

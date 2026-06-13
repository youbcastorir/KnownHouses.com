// service-worker.js — Public Writer Tangier | KnownHouses.com
const CACHE_NAME = 'pw-tanger-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './translations.js',
  './services.js',
  './blog.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const cloned = response.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, cloned));
        return response;
      }).catch(() => cached || new Response('Offline', { status: 503 }));
    })
  );
});

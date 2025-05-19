// Registers but does not cache anything, missing fetch handlers
self.addEventListener('install', event => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', event => {
  // No event.respondWith → network requests not intercepted
  console.log('Fetch intercepted but no caching:', event.request.url);
});
// Advanced Service Worker for SEO and Performance
const CACHE_NAME = 'shopso-v1';
const STATIC_CACHE = 'shopso-static-v1';
const DYNAMIC_CACHE = 'shopso-dynamic-v1';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/manifest.json',
  '/green-logo.png',
  '/favicon.ico',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
];

// Resources to cache on demand
const CACHEABLE_ROUTES = [
  '/aboutus',
  '/contact',
  '/blog',
  '/gallery',
  '/privacy-policy',
  '/terms-of-service'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (url.origin !== location.origin) return;

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Serve from cache and update in background
            fetch(request)
              .then(networkResponse => {
                if (networkResponse.ok) {
                  caches.open(DYNAMIC_CACHE)
                    .then(cache => cache.put(request, networkResponse.clone()));
                }
              })
              .catch(() => {}); // Ignore network errors
            
            return cachedResponse;
          }

          // Not in cache, fetch from network
          return fetch(request)
            .then(networkResponse => {
              if (networkResponse.ok && CACHEABLE_ROUTES.some(route => url.pathname.startsWith(route))) {
                // Cache successful responses for cacheable routes
                caches.open(DYNAMIC_CACHE)
                  .then(cache => cache.put(request, networkResponse.clone()));
              }
              return networkResponse;
            })
            .catch(() => {
              // Network failed, return offline page if available
              return caches.match('/offline') || new Response('Offline', { status: 503 });
            });
        })
    );
    return;
  }

  // Handle static assets
  if (request.destination === 'image' || request.destination === 'script' || request.destination === 'style') {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request)
            .then(networkResponse => {
              if (networkResponse.ok) {
                // Cache static assets
                caches.open(STATIC_CACHE)
                  .then(cache => cache.put(request, networkResponse.clone()));
              }
              return networkResponse;
            });
        })
    );
  }
});

// Background sync for analytics
self.addEventListener('sync', event => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(
      // Send queued analytics data when online
      sendQueuedAnalytics()
    );
  }
});

// Push notifications (for future use)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/android-chrome-192x192.png',
      badge: '/favicon-32x32.png',
      data: data.url
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.notification.data) {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    );
  }
});

// Helper function to send queued analytics
async function sendQueuedAnalytics() {
  try {
    const cache = await caches.open('analytics-queue');
    const requests = await cache.keys();
    
    for (const request of requests) {
      try {
        await fetch(request);
        await cache.delete(request);
      } catch (error) {
        console.log('Failed to send analytics:', error);
      }
    }
  } catch (error) {
    console.log('Analytics sync failed:', error);
  }
}

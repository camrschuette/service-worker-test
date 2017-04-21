'use strict';

self.addEventListener('install', function (event) {
    self.skipWaiting();

    console.log('Installed', event);
});

self.addEventListener('activate', function (event) {
    console.log('Activated', event);
});

// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  // Keep the service worker alive until the notification is created.
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
    self.registration.showNotification('ServiceWorker Cookbook', {
      body: 'Alea iacta est',
    })
  );
});
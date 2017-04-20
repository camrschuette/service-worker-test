if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Register a Service Worker.
		navigator.serviceWorker.register('sw.js')
		.then(function(registration) {
		  // Use the PushManager to get the user's subscription to the push service.
		  return registration.pushManager.getSubscription()
		  .then(function(subscription) {
				// If a subscription was found, return it.
				if (subscription) {
				  return subscription;
				}

				// Otherwise, subscribe the user (userVisibleOnly allows to specify that we don't plan to
				// send notifications that don't have a visible effect for the user).
				return registration.pushManager.subscribe({ userVisibleOnly: true });
			});
		}).then(function(subscription) {
			endpoint = subscription.endpoint;
		});
    });
}
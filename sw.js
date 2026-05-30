self.addEventListener("push", e => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || "Iris 🐾", {
      body: data.body || "",
      icon: "/iris-tracker/icon.png",
      badge: "/iris-tracker/icon.png",
    })
  );
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.openWindow("/iris-tracker/"));
});

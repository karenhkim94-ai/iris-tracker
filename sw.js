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

self.addEventListener("message", e => {
  if (e.data && e.data.type === "NOTIFY") {
    self.registration.showNotification(e.data.title || "Iris 🐾", {
      body: e.data.body || "",
      icon: "/iris-tracker/icon.png",
      badge: "/iris-tracker/icon.png",
    });
  }
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.openWindow("/iris-tracker/"));
});

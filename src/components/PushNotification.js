export async function subscribeUser() {
  if (!("serviceWorker" in navigator)) {
    console.error("Service workers are not supported in this browser.");
    return;
  }

  const permission = await Notification.requestPermission();

  if (permission !== "granted") {
    console.error("Notification permission denied.");
    alert("You have denied notifications. Enable them in browser settings.");
    return;
  }

  try {
      const registration = await navigator.serviceWorker.ready;
      const existingSubscription = await registration.pushManager.getSubscription();
      if (existingSubscription) {
        alert("You are already subscribed to notifications.");
        await existingSubscription.unsubscribe();
      }
  
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BGHw-qqRvHoCjZ4QxSD8vKfkAqVlZwnDTNtLDJz75NwVUpj6uVO2HU9YYuI5JBvyXI5Ie49RpL8hkRcfXxG0I7M"
      });
  
      await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "Content-Type": "application/json"
        }
      });
      alert("Subscribed! You will receive notifications.");
    } catch (err) {
      console.error("Subscription failed:", err);
      alert("Failed to subscribe for notifications. Check console for details.");
    }
  }
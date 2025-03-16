"use client";
import { subscribeUser } from "import/components/PushNotification";
import styles from "./page.module.css";
export default function Home() {
  async function sendNotification() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();

      if (!subscription) {
        alert("You are not subscribed. Please subscribe first.");
        return;
      }

      await fetch("/api/send-notification", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Notification sent! Check your device.");
    } catch (error) {
      console.error("Failed to send notification:", error);
      alert("Failed to send notification. Check console for details.");
    }
  }

  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.hola}>Hola!</h1>
      <div className={styles.notificationIcon}>
        <img src="/bellimage.png" alt="Notification Icon" width="80" />
      </div>
      <div className={styles.notificationText}>
        <h2>Lorem Ipsum...</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <button onClick={subscribeUser} className={styles.notifyBtn}>
        Send Notification
      </button>
    </div>
    </>
  );
}
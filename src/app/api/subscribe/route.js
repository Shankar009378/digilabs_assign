import webpush from "web-push";

// Replace these with your actual VAPID keys (Generate them at: https://web-push-codelab.glitch.me/)
const publicVapidKey = "BGHw-qqRvHoCjZ4QxSD8vKfkAqVlZwnDTNtLDJz75NwVUpj6uVO2HU9YYuI5JBvyXI5Ie49RpL8hkRcfXxG0I7M";
const privateVapidKey = "j1FqlDHS-ztMYFRfJRJdvmjeQDFuXS5M6RXoZzWPREY";

webpush.setVapidDetails("mailto:test@example.com", publicVapidKey, privateVapidKey);

export async function POST(req) {
  try {
    const subscription = await req.json();
    
    await webpush.sendNotification(
      subscription,
      JSON.stringify({ title: "Hello!", body: "You have a new notification!" })
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

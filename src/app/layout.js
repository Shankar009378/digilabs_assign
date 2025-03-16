import ServiceWorkerRegister from "import/components/ServiceWorkerRegister";
import "./globals.css";
export const metadata = {
  title: "Shankar Kumar Nanda",
  description: "DiGiLABS assignment",
  manifest: "/manifest.json",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
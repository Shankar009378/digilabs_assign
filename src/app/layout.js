import ServiceWorkerRegister from "import/components/ServiceWorkerRegister";
import "./globals.css";
export const metadata = {
  title: "Vimal Anand",
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
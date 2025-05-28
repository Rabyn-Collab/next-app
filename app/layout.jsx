import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <h1 className="text-2xl font-bold">THis is Header</h1>
        <main className="p-5">
          {children}
        </main>

      </body>
    </html>
  );
}

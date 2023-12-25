import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/">HOME</Link>
          <Link href="/list">LIST</Link>
          <Link href="/cart">CART</Link>
        </div>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header className="header">
      <p>Nextjs에서 SEO 해보기</p>
          <nav>
              <Link href="/">Home</Link>
              <Link href="/chicken">Chicken</Link>
              <Link href="/pasta">Pasta</Link>
              <Link href="/sushi">Sushi</Link>
          </nav>
      </header>
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}

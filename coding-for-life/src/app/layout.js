// npx json-server --port 9999 --watch db.json
// npm run dev

import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export default async function RootLayout({ children }) {
  const res = await fetch("http://localhost:9999/topics", {
    cache: "no-store",
  });
  const topics = await res.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">게시판</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}

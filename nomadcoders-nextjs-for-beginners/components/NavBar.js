import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div>
        <Link href="/" style={{ color: router.pathname === "/" ? "red" : "inherit" }}>
          Home
        </Link>
        <Link
          href="/about"
          style={{ color: router.pathname === "/about" ? "red" : "inherit" }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const navLinks = [
    { href: "/posts", label: "Posts", activePaths: ["/posts", "/posts/pages/[page]", "/posts/[slug]"] },
    { href: "/about", label: "About" },
    { href: "/auth/login", label: "Login" },
    { href: "/auth/register", label: "Register" },
  ];

  return (
    <div className="bg-blue-500">
      <div className="px-10">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-white uppercase font-semibold tracking-tight">
              <span>{process.env.appName}</span>
            </Link>
          </div>

          <div className="flex items-center">
            {navLinks.map(({ href, label, activePaths }) => (
              <Link
                key={href}
                href={href}
                className={`py-5 px-3 text-blue-200 hover:text-white ${activePaths?.includes(router.pathname) || router.pathname === href ? "font-bold text-white" : ""}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

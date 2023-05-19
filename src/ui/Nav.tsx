import Link from "next/link";

const items = [
  { text: "Home", href: "/" },
  { text: "Contact", href: "/contact" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Blog", href: "/blog" },
  { text: "Tools", href: "/tools" },
];

export default function Nav() {
  return (
    <nav>
      <ul className={`flex gap-5`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/tools">Tools</Link>
        </li>
      </ul>
    </nav>
  );
}

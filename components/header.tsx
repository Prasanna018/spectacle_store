import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="w-full p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Spectacle Store
        </Link>
        <nav className="space-x-4">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}


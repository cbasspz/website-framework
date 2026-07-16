import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          YourAgency
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="#services" className="hover:text-foreground transition">
            Services
          </Link>
          <Link href="#portfolio" className="hover:text-foreground transition">
            Portfolio
          </Link>
          <Link href="#about" className="hover:text-foreground transition">
            About
          </Link>
          <Link href="#contact" className="hover:text-foreground transition">
            Contact
          </Link>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}


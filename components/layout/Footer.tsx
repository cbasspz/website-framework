import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function Footer() {
  const { footer, business } = siteContent;

  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold tracking-tight">
            {business.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {footer.tagline}
          </p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <p className="text-sm font-semibold">{column.heading}</p>
            <div className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">{footer.copyright}</p>
      </div>
    </footer>
  );
}
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/hobby-bichos-logo-amarela.png.asset.json";
import { BRAND, navLinks, whatsappLink } from "@/data/units";
import { BrandButton } from "./BrandButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-gradient-to-b from-brand-yellow/95 to-brand-yellow/70",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label={BRAND.name}>
          <img
            src={logo.url}
            alt="Logo Hobby Bichos Pet Shop"
            width={96}
            height={96}
            className="h-16 w-16 rounded-2xl object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
          />
          <span className="hidden font-display text-lg leading-none text-brand-blue-deep sm:block">
            Hobby Bichos
            <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-red">
              Pet Shop
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-brand-blue-deep transition-colors hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <BrandButton
            as="a"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Fale com a Hobby Bichos
          </BrandButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-primary-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 shadow-soft lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-bold text-brand-blue-deep transition-colors hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <BrandButton
            as="a"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            className="mt-3 w-full"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Falar pelo WhatsApp
          </BrandButton>
        </div>
      )}
    </header>
  );
}

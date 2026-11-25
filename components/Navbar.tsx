"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MonitorPlay,
  ChevronDown,
  Zap,
} from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

const mainLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  {
    href: "/website-laten-maken-rotterdam",
    label: "WEBSITE",
    children: [
      {
        href: "/website-laten-maken-rotterdam",
        label: "Website laten maken",
      },
      {
        href: "/nextjs-vs-wordpress",
        label: "Next.js vs WordPress",
      },
      {
        href: "/wordpress-naar-nextjs",
        label: "WordPress naar Next.js",
      },
    ],
  },
  { href: "/seo-rotterdam", label: "SEO" },
  { href: "/pakketten", label: "PAKKETTEN" },
  { href: "/over-mij", label: "OVER MIJ" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contact", label: "CONTACT" },
];

const dropdownId = "website-dropdown";
const mobileMenuId = "mobile-navigation";
const mobileSubmenuId = "mobile-website-submenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setOpen(false);
        setMobileSubOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileSubOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const isSectionActive = (item: NavLink) => {
    if (isActive(item.href)) {
      return true;
    }

    return item.children?.some((child) => isActive(child.href)) ?? false;
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileSubOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter,padding] duration-300 ${
        isScrolled || open
          ? "border-b border-border-subtle bg-background/95 py-3 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5"
      }`}
      data-testid="site-navbar"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center gap-3 font-serif text-xl text-foreground transition-opacity hover:opacity-80 lg:text-2xl"
            aria-label="WebBoost Partner - Home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-brand text-white lg:h-10 lg:w-10">
              <Zap size={20} className="fill-current" />
            </span>

            <span>WebBoost Partner</span>
          </Link>

          {/* Desktop navigatie */}
          <div className="hidden items-center gap-6 lg:flex">
            <nav
              className="flex items-center gap-6"
              aria-label="Hoofdnavigatie"
            >
              {mainLinks.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    onFocus={() => setDropdownOpen(true)}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((value) => !value)}
                      aria-expanded={dropdownOpen}
                      aria-controls={dropdownId}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                        isSectionActive(item)
                          ? "text-brand"
                          : "text-foreground-muted hover:text-brand"
                      }`}
                    >
                      {item.label}

                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          dropdownOpen
                            ? "rotate-180 text-brand"
                            : ""
                        }`}
                      />
                    </button>

                    {dropdownOpen && (
                      <div
                        id={dropdownId}
                        className="absolute left-0 top-full w-64 pt-4"
                      >
                        <div
                          role="menu"
                          aria-label="Websitepagina's"
                          className="overflow-hidden rounded-md border border-border-subtle bg-white py-2 shadow-elevated"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              aria-current={
                                isActive(child.href) ? "page" : undefined
                              }
                              onClick={() => setDropdownOpen(false)}
                              className={`block px-5 py-3 text-sm transition-colors duration-200 ${
                                isActive(child.href)
                                  ? "bg-background-secondary/60 font-semibold text-brand"
                                  : "text-foreground-muted hover:bg-background-secondary/40 hover:text-brand"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={
                      isActive(item.href) ? "page" : undefined
                    }
                    className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-brand"
                        : "text-foreground-muted hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact?intent=quickscan"
              className="ml-2 inline-flex items-center gap-2 whitespace-nowrap rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-white"
            >
              <MonitorPlay size={16} aria-hidden="true" />
              Gratis Quickscan
            </Link>
          </div>

          {/* Mobiele menuknop */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-sm text-foreground transition-colors hover:bg-background-secondary hover:text-brand lg:hidden"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={mobileMenuId}
            data-testid="mobile-menu-btn"
          >
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobiele navigatie */}
        {open && (
          <nav
            id={mobileMenuId}
            className="absolute left-0 top-full max-h-[calc(100dvh-5rem)] w-full overflow-y-auto border-b border-border-subtle bg-background px-6 py-5 shadow-elevated lg:hidden"
            aria-label="Mobiele navigatie"
          >
            <div className="space-y-1">
              {mainLinks.map((item) =>
                item.children ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSubOpen((value) => !value)
                      }
                      className={`flex w-full items-center justify-between rounded-sm py-3 text-sm font-semibold transition-colors ${
                        isSectionActive(item)
                          ? "text-brand"
                          : "text-foreground hover:text-brand"
                      }`}
                      aria-expanded={mobileSubOpen}
                      aria-controls={mobileSubmenuId}
                    >
                      {item.label}

                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          mobileSubOpen
                            ? "rotate-180 text-brand"
                            : ""
                        }`}
                      />
                    </button>

                    {mobileSubOpen && (
                      <div
                        id={mobileSubmenuId}
                        className="ml-2 mt-1 space-y-1 border-l border-border-subtle py-2 pl-4"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobileMenu}
                            aria-current={
                              isActive(child.href) ? "page" : undefined
                            }
                            className={`block rounded-sm py-2 text-sm transition-colors ${
                              isActive(child.href)
                                ? "font-semibold text-brand"
                                : "text-foreground-muted hover:text-brand"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={
                      isActive(item.href) ? "page" : undefined
                    }
                    className={`block rounded-sm py-3 text-sm font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-brand"
                        : "text-foreground hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Mobiele CTA */}
            <Link
              href="/contact?intent=quickscan"
              onClick={closeMobileMenu}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              <MonitorPlay size={16} aria-hidden="true" />
              Gratis Quickscan
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

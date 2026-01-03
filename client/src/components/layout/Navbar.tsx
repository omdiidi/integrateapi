import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold font-heading tracking-tight text-primary flex items-center gap-2">
              IntegrateAPI
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location === link.href ? "text-primary font-semibold" : "text-slate-600"
                    )}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
            <Link href="/contact">
              <Button variant="default" size="sm" className="bg-[#007AFF] text-white hover:bg-[#0062CC] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contact us directly
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-base font-medium py-2 hover:text-primary",
                    location === link.href ? "text-primary" : "text-slate-600"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100">
              <Link href="/contact">
                <Button variant="default" className="w-full justify-center bg-[#007AFF] text-white hover:bg-[#0062CC] shadow-md hover:shadow-lg transition-all duration-300">
                  Contact us directly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

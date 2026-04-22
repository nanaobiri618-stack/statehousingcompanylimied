"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Building2,
  Briefcase,
  FolderKanban,
  FileText,
  Newspaper,
  Users,
  Phone,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: Building2 },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/team", label: "Team", icon: Users },
  { href: "/apply", label: "Apply", icon: FileText },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.jpg"
                alt="SHC Logo"
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-shc-blue hover:bg-blue-50 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/projects"
                className="ml-3 px-5 py-2.5 bg-shc-dark text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors text-sm shadow-sm"
              >
                Become a Homeowner
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          {/* Sidebar */}
          <aside className="fixed inset-y-0 right-0 w-80 bg-white z-50 lg:hidden shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <img
                  src="/images/logo.jpg"
                  alt="SHC Logo"
                  className="h-12 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-shc-blue transition-colors font-medium"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-shc-dark text-white font-semibold rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <FolderKanban className="w-5 h-5" />
                  Become a Homeowner
                </Link>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

import Link from "next/link";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/projects", label: "Projects" },
  { href: "/apply", label: "Apply Now" },
  { href: "/blog", label: "News & Updates" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Building Construction",
  "Architecture Design",
  "Renovation & Maintenance",
  "Flooring & Roofing",
  "Mortgage Facilitation",
  "Estate Management",
];

export default function Footer() {
  return (
    <footer className="bg-shc-dark text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="SHC Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              The Nation&apos;s No. 1 Builder. Established in 1956, SHC is
              Ghana&apos;s premier state-owned housing company, committed to
              bridging the housing deficit and providing quality affordable
              homes.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1EnV9oGUjX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-shc-blue transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/statehousing_gh?s=21&t=zzLx5w52jWS54JhpD_27DA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-shc-blue transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/statehousing_gh?igsh=MTJianNoaDI1bjV4Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-shc-blue transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@statehousingcompanyltd1195?si=ddPsK7J488HAWr9J"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-shc-blue transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-shc-blue-light flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Ring Road West, Adjacent STC Main Yard, Accra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-shc-blue-light flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  050 245 2271 / 055 394 8056
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-shc-blue-light flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  info@statehousing.gov.gh / sales.hq@statehousing.gov.gh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-shc-blue-light flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Mon - Fri: 8:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} State Housing Company Limited. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

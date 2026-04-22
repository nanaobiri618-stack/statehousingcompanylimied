import Link from "next/link";
import {
  Hammer,
  Paintbrush,
  Home,
  Landmark,
  Shield,
  ArrowRight,
  CheckCircle2,
  Building2,
  Ruler,
  Wrench,
  Layers,
  Banknote,
} from "lucide-react";
import type { Metadata } from "next";
import ImageSlider from "@/components/ImageSlider";

export const metadata: Metadata = {
  title: "Our Services - State Housing Company Limited",
  description:
    "Explore SHC's services: building construction, architecture design, renovation, flooring, roofing, and mortgage facilitation.",
};

const services = [
  {
    title: "Building Construction & Architecture Design",
    description:
      "From concept to completion, we deliver world-class residential and commercial buildings. Our in-house architecture team designs homes that blend modern aesthetics with Ghanaian cultural sensibilities.",
    icon: Building2,
    image: "/images/BUILDING CONSRUCION AND ARCHITECTURE.webp",
    features: [
      "Custom residential design",
      "Commercial building construction",
      "Structural engineering",
      "Project management from start to finish",
      "Compliance with Ghana Building Code",
    ],
    color: "bg-blue-50 text-shc-blue",
  },
  {
    title: "Building Renovation & Maintenance",
    description:
      "We breathe new life into existing structures. Whether it's a complete renovation or routine maintenance, our skilled team ensures your property remains in top condition.",
    icon: Wrench,
    image: "/images/BUILDING RENOVAION AND MAINTENANCE MANAGEMENT.webp",
    features: [
      "Full-scale building renovation",
      "Plumbing & electrical upgrades",
      "Structural repairs & reinforcement",
      "Preventive maintenance programs",
      "Estate facility management",
    ],
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Flooring & Roofing",
    description:
      "Quality flooring and roofing solutions that stand the test of time. We source premium materials and employ expert craftsmen for lasting results.",
    icon: Layers,
    image: "/images/FLOORING AND ROOFING.webp",
    features: [
      "Premium tile & marble flooring",
      "Concrete & terrazzo finishing",
      "Aluminium roofing systems",
      "Waterproofing solutions",
      "Roof insulation & ventilation",
    ],
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Mortgage Facilitation",
    description:
      "We partner with leading financial institutions including Republic Bank to help you secure mortgage financing for your dream home. Our team simplifies the process and guides you every step of the way.",
    icon: Banknote,
    image: "/images/MORTAGEFACILITATION.png",
    features: [
      "Partnership with Republic Bank & others",
      "Mortgage pre-qualification assistance",
      "Flexible payment plan arrangements",
      "First-time buyer guidance",
      "Documentation & processing support",
    ],
    color: "bg-purple-50 text-purple-600",
  },
];

const partners = [
  "Republic Bank Ghana",
  "GCB Bank",
  "Agricultural Development Bank",
  "Ministry of Works & Housing",
  "Ghana Mortgage Refinance Company",
];

export default function ServicesPage() {
  return (
    <>
      {/* Image Slider */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageSlider
            images={[
              "/images/BUILDING CONSRUCION AND ARCHITECTURE.webp",
              "/images/BUILDING RENOVAION AND MAINTENANCE MANAGEMENT.webp",
              "/images/FLOORING AND ROOFING.webp",
              "/images/MORTAGEFACILITATION.png",
            ]}
            autoPlay={true}
            interval={5000}
            className="h-[600px] rounded-3xl"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-shc-dark mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expert services tailored to meet all your housing needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-shc-blue/10 to-blue-50 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-shc-blue/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium`}
                    >
                      <service.icon className="w-4 h-4" />
                      {service.title.split('&')[0].trim()}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-shc-dark mb-3 group-hover:text-shc-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-shc-blue flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-shc-dark mb-4">
              Our Banking & Institutional Partners
            </h2>
            <p className="text-gray-600 text-lg">
              Working together to make homeownership accessible
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-8 py-4 bg-gradient-to-r from-shc-blue/5 to-blue-50 rounded-2xl border border-shc-blue/10 text-gray-700 font-semibold hover:shadow-lg transition-all"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-shc-blue via-blue-600 to-shc-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking to build, renovate, or secure a mortgage, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-shc-dark text-white font-bold rounded-2xl hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/20 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

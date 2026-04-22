import Link from "next/link";
import {
  MapPin,
  Building2,
  Search,
  BedDouble,
  Bath,
  Maximize,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Tag,
} from "lucide-react";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - State Housing Company Limited",
  description:
    "Browse all available SHC properties across Ghana. Find your dream home from our estates in Greater Accra, Ashanti, Volta, and Upper East regions.",
};

export default function ProjectsPage() {
  const onSale = projects.filter((p) => p.status === "On Sale");
  const readyForSale = projects.filter((p) => p.status === "Ready for Sale");

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-sm font-semibold rounded-full mb-4">
              Available Properties
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Browse our portfolio of quality homes across Ghana. From
              apartments to executive bungalows, SHC has a property for every
              budget and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-shc-blue text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">{projects.length}</p>
              <p className="text-white/70 text-sm">Active Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4</p>
              <p className="text-white/70 text-sm">Regions Covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold">GH₵ 310K</p>
              <p className="text-white/70 text-sm">Starting Price</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2-4</p>
              <p className="text-white/70 text-sm">Bedroom Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* On Sale */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-2">
                On Sale Now
              </span>
              <h2 className="text-3xl font-bold text-shc-dark">
                Currently Available
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onSale.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  {project.images.length > 0 && (
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    On Sale
                  </span>
                  <span className="absolute top-4 right-4 px-3 py-1 bg-shc-blue text-white text-xs font-bold rounded-full">
                    {project.region}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-shc-dark mb-1 group-hover:text-shc-blue transition-colors">
                    {project.name}
                  </h3>
                  <p className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Price range */}
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-shc-blue" />
                    <span className="text-shc-blue font-bold text-lg">
                      {project.prices[0].amount}
                    </span>
                    {project.prices.length > 1 && (
                      <span className="text-gray-400 text-sm">- {project.prices[project.prices.length - 1].amount}</span>
                    )}
                  </div>

                  {/* Types */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.types.slice(0, 3).map((type) => (
                      <span
                        key={type}
                        className="px-2.5 py-1 bg-blue-50 text-shc-blue text-xs font-medium rounded-md"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 text-center px-4 py-2.5 border-2 border-shc-blue text-shc-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
                    >
                      View More
                    </Link>
                    <Link
                      href={`/apply?project=${project.slug}`}
                      className="flex-1 text-center px-4 py-2.5 bg-shc-dark text-white font-bold rounded-lg hover:bg-gray-900 transition-colors text-sm"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready for Sale */}
      {readyForSale.length > 0 && (
        <section className="py-20 bg-shc-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-2">
                Ready for Sale
              </span>
              <h2 className="text-3xl font-bold text-shc-dark">
                Coming Soon
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {readyForSale.map((project) => (
                <div
                  key={project.slug}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group"
                >
                  <div className="relative h-52 overflow-hidden">
                    {project.images.length > 0 && (
                      <img
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                      Ready for Sale
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-shc-blue text-white text-xs font-bold rounded-full">
                      {project.region}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-shc-dark mb-1 group-hover:text-shc-blue transition-colors">
                      {project.name}
                    </h3>
                    <p className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.tagline}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-shc-blue" />
                      <span className="text-shc-blue font-bold text-lg">
                        {project.prices[0].amount}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.types.slice(0, 3).map((type) => (
                        <span
                          key={type}
                          className="px-2.5 py-1 bg-blue-50 text-shc-blue text-xs font-medium rounded-md"
                        >
                          {type}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex-1 text-center px-4 py-2.5 border-2 border-shc-blue text-shc-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
                      >
                        View More
                      </Link>
                      <Link
                        href={`/apply?project=${project.slug}`}
                        className="flex-1 text-center px-4 py-2.5 bg-shc-dark text-white font-bold rounded-lg hover:bg-gray-900 transition-colors text-sm"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-shc-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            With SHCL, Owning a Home is Easy
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Fill a form, pay the processing fee, make an initial deposit — and
            you&apos;re on your way to becoming a homeowner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-shc-dark text-white font-bold rounded-xl hover:bg-gray-900 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://forms.gle/rL8X8Woe63iiqifr7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              Apply via Google Form
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

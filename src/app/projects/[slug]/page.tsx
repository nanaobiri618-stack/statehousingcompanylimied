import Link from "next/link";
import {
  MapPin,
  Building2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Download,
  Phone,
  Tag,
  Shield,
  Home,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} - State Housing Company Limited`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full ${
                  project.status === "On Sale"
                    ? "bg-blue-500 text-white"
                    : "bg-amber-500 text-white"
                }`}
              >
                {project.status}
              </span>
              <span className="px-3 py-1 bg-white/10 text-xs font-semibold rounded-full">
                {project.region}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {project.name}
            </h1>
            <p className="flex items-center gap-2 text-white/70 text-lg mb-4">
              <MapPin className="w-5 h-5" />
              {project.location}
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Image & Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden">
              {project.images.length > 0 && (
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                {project.types.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1.5 bg-white/90 text-shc-blue text-xs font-semibold rounded-lg shadow-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                About This Estate
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Pricing */}
              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-shc-blue" />
                  Pricing
                </h3>
                <div className="space-y-3">
                  {project.prices.map((price) => (
                    <div
                      key={price.label}
                      className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm"
                    >
                      <span className="font-medium text-gray-700">
                        {price.label}
                      </span>
                      <span className="text-shc-blue font-bold text-lg">
                        {price.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/apply?project=${project.slug}`}
                  className="flex-1 text-center px-6 py-3.5 bg-shc-blue text-white font-bold rounded-xl hover:bg-shc-gray transition-colors shadow-md"
                >
                  Buy Now
                </Link>
                <a
                  href={project.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3.5 border-2 border-shc-blue text-shc-blue font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Apply via Google Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-shc-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
            <Shield className="w-6 h-6 text-shc-blue" />
            Estate Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-shc-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            Buying Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-shc-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                1. Application Form
              </h3>
              <p className="text-gray-600 text-sm">
                Pick a form at any of our offices, fill and submit OR apply via
                our online platform. WhatsApp us on 0502 452 271 / 0553 948 056
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-shc-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Tag className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                2. Processing Fee
              </h3>
              <p className="text-gray-600 text-sm">
                A non-refundable processing fee of GH₵ 1,000.00 is required.
                You will also need two (2) copies of passport sized pictures and
                any valid national ID.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-shc-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                3. Initial Deposit
              </h3>
              <p className="text-gray-600 text-sm">
                Client is then asked to make an initial deposit — a percentage
                of the selling price. Payment plans including mortgage and
                installments are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-shc-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Own a Home at {project.name}?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Start your application today and join the {project.name} community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/apply?project=${project.slug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-shc-dark text-white font-bold rounded-xl hover:bg-gray-900 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/233502452271"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

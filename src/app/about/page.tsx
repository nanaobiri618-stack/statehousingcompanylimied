import Link from "next/link";
import {
  Building2,
  Users,
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  Clock,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import ImageSlider from "@/components/ImageSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - State Housing Company Limited",
  description:
    "Learn about the history, mission, and leadership of Ghana's State Housing Company Limited, established in 1956.",
};

const teamMembers = [
  {
    name: "Mr. John S. Bawah",
    role: "Managing Director / Board Member",
    category: "Management",
    description:
      "Leading SHC's strategic vision to bridge Ghana's housing deficit through innovative construction and partnerships.",
    image: "/images/ourteam1.jpg"
  },
  {
    name: "Gloria Arthur",
    role: "Head of Human Resources",
    category: "Management",
    description:
      "Modernizing the SHC workforce from the Accra head office, Gloria focuses on talent development and creating a high-performance culture across all regional and zonal offices.",
    image: "/images/ourteam.jpg"
  },
  {
    name: "Margaret Zokli",
    role: "Head of Administration",
    category: "Management",
    description:
      "The operational engine of SHC, Margaret manages the logistics, fleet, and corporate administration necessary to support massive housing projects nationwide.",
    image: "/images/ourteam1.jpg"
  },
  {
    name: "Esq. Rita A. Fofie",
    role: "Head of Legal",
    category: "Management",
    description:
      "As the lead legal strategist, Esq. Fofie ensures all property titles are secure and litigation-free, protecting the investments of every State Housing homeowner.",
    image: "/images/ourteam.jpg"
  },
  {
    name: "Mr. Kofi Boamah Mensah",
    role: "Board Member",
    category: "Board",
    description:
      "A financial strategist on the board, Mr. Mensah oversees audit compliance and ensures the company's long-term financial sustainability for future housing projects.",
    image: "/images/ourteam1.jpg"
  },
  {
    name: "Mr. Chris Pobee Abbey",
    role: "Board Member",
    category: "Board",
    description:
      "With a background in technical excellence, Mr. Abbey advises the board on construction standards and innovative building technologies to reduce costs for Ghanaians.",
    image: "/images/ourteam.jpg"
  },
];

const faqs = [
  {
    q: "How do I apply for a house?",
    a: "You can apply by visiting our Apply page, downloading the application form, and submitting it with the required processing fee of GH₵ 1,000.00 to any of our offices.",
  },
  {
    q: "Can I get a mortgage for an SHC property?",
    a: "Yes, SHC partners with financial institutions including Republic Bank to facilitate mortgage arrangements for qualifying buyers. Our team will guide you through the process.",
  },
  {
    q: "Are SHC properties gated communities?",
    a: "Many of our estates are gated communities with 24/7 security. Each project page specifies the security features available.",
  },
  {
    q: "What is the non-refundable processing fee?",
    a: "The current non-refundable processing fee is GH₵ 1,000.00. This fee covers the administrative costs of processing your application.",
  },
  {
    q: "Can I view a property before purchasing?",
    a: "Yes, site visits can be arranged by contacting our sales team. We encourage all prospective buyers to visit the estate before making a decision.",
  },
];

const milestones = [
  { year: "1956", event: "State Housing Corporation established by the Government of Ghana" },
  { year: "1960s", event: "Completed first major housing estates in Accra and Kumasi" },
  { year: "1970s", event: "Expanded operations to all 10 regions of Ghana" },
  { year: "1990s", event: "Transitioned to State Housing Company Limited under commercial law" },
  { year: "2000s", event: "Launched public-private partnership models for estate development" },
  { year: "2010s", event: "Delivered over 30,000 homes across Ghana" },
  { year: "2020s", event: "Embracing modern construction technology and green building practices" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Building Ghana Since 1956
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              The State Housing Company Limited is Ghana&apos;s premier
              state-owned housing enterprise, dedicated to providing quality,
              affordable homes and bridging the nation&apos;s housing deficit.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-shc-blue/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-shc-blue" />
              </div>
              <h3 className="text-xl font-bold text-shc-dark mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality, affordable housing for Ghanaians through
                innovative construction, strategic partnerships, and sustainable
                development practices that bridge the housing deficit.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-shc-dark mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading housing solutions provider in West Africa,
                recognized for excellence in construction quality, customer
                satisfaction, and contribution to national development.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <Heart className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-shc-dark mb-3">
                Core Values
              </h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Integrity & Transparency",
                  "Quality & Excellence",
                  "Innovation & Sustainability",
                  "Customer-Centric Approach",
                  "Accountability & Good Governance",
                ].map((value) => (
                  <li key={value} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-shc-blue/10 text-shc-blue text-sm font-semibold rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-shc-dark">
              Over 68 Years of Building Ghana
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0 w-20 h-10 bg-shc-blue/10 rounded-lg flex items-center justify-center">
                  <span className="text-shc-blue font-bold text-sm">
                    {m.year}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-shc-blue/10 text-shc-blue text-sm font-semibold rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-shc-dark mb-4">
              Our Management Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet the dedicated professionals steering SHC towards its goal of
              providing quality affordable housing for all Ghanaians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col overflow-hidden"
              >
                {/* Photo Area */}
                <div className="relative h-72 w-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase shadow-md ${member.category === 'Board' ? 'bg-blue-900' : 'bg-yellow-600'}`}>
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Bio Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-blue-950 leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-yellow-600 mb-3 tracking-wide uppercase">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed italic">
                    "{member.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-shc-blue font-semibold hover:gap-3 transition-all"
            >
              View Full Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-shc-blue/10 text-shc-blue text-sm font-semibold rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-shc-dark mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-shc-dark font-semibold hover:text-shc-blue transition-colors">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-shc-blue flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

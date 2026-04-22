import Link from "next/link";
import {
  Newspaper,
  Calendar,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  Building2,
  Handshake,
  Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates - State Housing Company Limited",
  description:
    "Latest news, press releases, and updates from the State Housing Company Limited of Ghana.",
};

const posts = [
  {
    title: "SHC Inaugurates New Estate in North Kaneshie",
    excerpt:
      "The State Housing Company has officially inaugurated the Urban Premier Court estate, adding over 200 new housing units to the Greater Accra housing stock.",
    date: "March 15, 2024",
    category: "Project Milestone",
    icon: Building2,
    color: "bg-blue-50 text-shc-blue",
  },
  {
    title: "Warning to Encroachers on State Lands",
    excerpt:
      "SHC issues a strong warning to individuals encroaching on state-owned lands designated for housing development. Legal action will be taken against violators.",
    date: "February 28, 2024",
    category: "Press Release",
    icon: AlertTriangle,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "New Banking Partnership with Republic Bank",
    excerpt:
      "SHC has signed a new partnership agreement with Republic Bank Ghana to expand mortgage facilitation options for prospective homebuyers.",
    date: "January 20, 2024",
    category: "Partnership",
    icon: Handshake,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "SHC Wins Housing Excellence Award 2023",
    excerpt:
      "The State Housing Company has been recognized with the Housing Excellence Award at the Ghana Property Awards for its contribution to affordable housing.",
    date: "December 10, 2023",
    category: "Award",
    icon: Award,
    color: "bg-blue-50 text-amber-600",
  },
  {
    title: "Rock Estates Bolgatanga Nearing Completion",
    excerpt:
      "Construction of the Rock Estates in Bolgatanga, Upper East Region, is 85% complete with handover expected by Q2 2024.",
    date: "November 5, 2023",
    category: "Project Update",
    icon: Building2,
    color: "bg-blue-50 text-shc-blue",
  },
  {
    title: "SHC MD Addresses National Housing Conference",
    excerpt:
      "Managing Director Mr. John S. Bawah delivered a keynote address at the National Housing Conference, outlining SHC's 5-year strategic plan.",
    date: "October 15, 2023",
    category: "Press Release",
    icon: Newspaper,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-sm font-semibold rounded-full mb-4">
              News & Updates
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Latest from SHC
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Stay informed with the latest company milestones, press releases,
              project updates, and partnership announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-100 overflow-hidden group"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-gray-50 flex items-center justify-center">
                  <div
                    className={`w-16 h-16 ${post.color} rounded-xl flex items-center justify-center`}
                  >
                    <post.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-2.5 py-0.5 ${post.color} text-xs font-semibold rounded-md`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-shc-dark mb-2 group-hover:text-shc-blue transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-shc-blue font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-shc-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="w-12 h-12 text-shc-blue-light mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/80 text-lg mb-8">
            Subscribe to receive the latest news, project launches, and housing
            opportunities from SHC.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-shc-blue-light/50"
            />
            <button className="px-8 py-3.5 bg-shc-dark text-white font-bold rounded-xl hover:bg-gray-900 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

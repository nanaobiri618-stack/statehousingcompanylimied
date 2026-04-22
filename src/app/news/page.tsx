import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News - State Housing Company Limited",
  description: "Latest news and updates from State Housing Company Limited",
};

const newsArticles = [
  {
    id: 1,
    title: "SHC Launches New Affordable Housing Project in Accra",
    excerpt:
      "State Housing Company Limited announces the launch of a new affordable housing project aimed at providing quality homes for Ghanaians. The project will feature modern amenities and sustainable building practices.",
    date: "April 15, 2026",
    readTime: "5 min read",
    category: "New Projects",
    image: "/images/shc6.jpg",
    externalUrl: "https://www.ghanaweb.com/GhanaHomePage/NewsArchive/",
  },
  {
    id: 2,
    title: "Partnership with Republic Bank to Simplify Mortgage Process",
    excerpt:
      "SHC strengthens its partnership with Republic Bank Ghana to make mortgage financing more accessible to first-time homebuyers. This initiative aims to reduce barriers to homeownership.",
    date: "April 10, 2026",
    readTime: "4 min read",
    category: "Partnerships",
    image: "/images/shc8.jpg",
    externalUrl: "https://www.republicbankghana.com/",
  },
  {
    id: 3,
    title: "Award for Excellence in Sustainable Building Practices",
    excerpt:
      "State Housing Company receives recognition for its commitment to sustainable construction and environmentally friendly building practices across all its projects.",
    date: "April 5, 2026",
    readTime: "3 min read",
    category: "Awards",
    image: "/images/shc9.jpg",
    externalUrl: "https://www.moh.gov.gh/",
  },
  {
    id: 4,
    title: "Renovation of Old Estate Buildings Complete",
    excerpt:
      "SHC successfully completes renovation of heritage estate buildings, preserving their historical significance while modernizing infrastructure for better living conditions.",
    date: "March 28, 2026",
    readTime: "6 min read",
    category: "Renovation",
    image: "/images/shc1.jpg",
    externalUrl: "https://www.myjoyonline.com/",
  },
  {
    id: 5,
    title: "New Flooring and Roofing Solutions Introduced",
    excerpt:
      "Innovation in construction materials as SHC introduces premium flooring and roofing solutions that enhance durability and aesthetic appeal of residential properties.",
    date: "March 20, 2026",
    readTime: "4 min read",
    category: "Innovation",
    image: "/images/shc2.jpg",
    externalUrl: "https://www.graphic.com.gh/",
  },
  {
    id: 6,
    title: "Community Outreach Program Launched",
    excerpt:
      "SHC launches community outreach program to educate citizens about homeownership opportunities and financial planning for property acquisition.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Community",
    image: "/images/shc3.jpg",
    externalUrl: "https://www.citinewsroom.com/",
  },
  {
    id: 7,
    title: "Expansion to Regional Centers Announced",
    excerpt:
      "State Housing Company announces expansion plans to establish regional centers across Ghana, bringing quality housing solutions closer to communities.",
    date: "March 10, 2026",
    readTime: "4 min read",
    category: "Expansion",
    image: "/images/shc4.jpg",
    externalUrl: "https://www.dailyguidenetwork.com/",
  },
  {
    id: 8,
    title: "Digital Application System Now Available",
    excerpt:
      "SHC introduces online application system for housing units, making it easier for Ghanaians to apply for homes from the comfort of their homes.",
    date: "March 5, 2026",
    readTime: "3 min read",
    category: "Technology",
    image: "/images/shc5.jpg",
    externalUrl: "https://www.peacefmonline.com/",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-shc-blue via-blue-600 to-shc-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-full mb-6 border border-white/30">
              Latest Updates
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              News & Updates
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Stay informed about the latest developments, projects, and announcements from State Housing Company Limited.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-shc-blue/5 to-blue-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-shc-blue/10 text-shc-blue text-sm font-semibold rounded-full mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-shc-dark mb-4">
                  {newsArticles[0].title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {newsArticles[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {newsArticles[0].readTime}
                  </div>
                </div>
                <a
                  href={newsArticles[0].externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-shc-blue font-semibold hover:gap-3 transition-all"
                >
                  Read Full Story
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-shc-dark mb-4">
              Recent News
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse through our latest articles and updates
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article) => (
              <a
                key={article.id}
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-shc-blue text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-shc-dark mb-3 group-hover:text-shc-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </a>
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
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded-2xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-96"
            />
            <button className="px-8 py-4 bg-shc-dark text-white font-bold rounded-2xl hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

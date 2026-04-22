import Link from "next/link";
import {
  Building2,
  Home,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  Hammer,
  Paintbrush,
  Landmark,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import ImageSlider from "@/components/ImageSlider";

const featuredProperties = [
  {
    name: "Urban Premier Court",
    location: "North Kaneshie, Greater Accra",
    price: "From GH₵ 450,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "120 sqm",
    features: ["Gated Community", "Fitted Kitchen", "24/7 Security"],
    image: "/images/shc6.jpg",
    href: "/projects",
  },
  {
    name: "Club Court Estate",
    location: "North Kaneshie, Greater Accra",
    price: "From GH₵ 380,000",
    bedrooms: 2,
    bathrooms: 2,
    area: "95 sqm",
    features: ["Gated Community", "Parking Space"],
    image: "/images/shc8.jpg",
    href: "/projects",
  },
  {
    name: "J.A. Kufuor Estates",
    location: "Kumasi, Ashanti Region",
    price: "From GH₵ 320,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "110 sqm",
    features: ["Gated Community", "24/7 Security"],
    image: "/images/shc9.jpg",
    href: "/projects",
  },
];

const stats = [
  { label: "Homes Built", value: "30,000+", icon: Home },
  { label: "Years of Service", value: "68+", icon: Clock },
  { label: "Estates Delivered", value: "50+", icon: Building2 },
  { label: "Regions Covered", value: "12+", icon: MapPin },
];

const steps = [
  {
    step: 1,
    title: "Choose Your Home",
    description:
      "Browse our portfolio of estates across Ghana and select the property that fits your lifestyle and budget.",
    icon: Home,
  },
  {
    step: 2,
    title: "Apply & Process",
    description:
      "Complete the application form, pay the non-refundable processing fee (GH₵ 1,000), and submit your documents.",
    icon: CheckCircle2,
  },
  {
    step: 3,
    title: "Move In",
    description:
      "Secure your mortgage through our banking partners, make your deposit, and receive the keys to your new home.",
    icon: Landmark,
  },
];

const quickLinks = [
  {
    title: "Our Services",
    description: "Construction, renovation, architecture design & mortgage facilitation",
    icon: Hammer,
    href: "/services",
    color: "bg-blue-50 text-shc-blue",
  },
  {
    title: "View Projects",
    description: "Explore our estates across Greater Accra, Ashanti, Upper East & more",
    icon: Building2,
    href: "/projects",
    color: "bg-blue-50 text-amber-600",
  },
  {
    title: "Management Team",
    description: "Meet the leadership driving Ghana's No. 1 Builder forward",
    icon: Users,
    href: "/team",
    color: "bg-blue-50 text-blue-600",
  },
];

const leadership = [
  {
    name: "Mr. Ralph Roland",
    role: "Chairman of the Board",
    category: "Board",
    history: "Inaugurated as Chairman in mid-2025, Mr. Roland provides the strategic direction and policy oversight required to steer SHC toward massive urban development and public-private partnerships.",
    image: "/images/ourteam.jpg"
  },
  {
    name: "Mr. John S. Bawah",
    role: "Managing Director / Board Member",
    category: "Management",
    history: "A dual-role leader, Mr. Bawah manages daily operations and bridges the gap between board policy and construction. He is the architect of the current 'Nation's No. 1 Builder' revitalization campaign.",
    image: "/images/ourteam1.jpg"
  },
  {
    name: "Nana Nuben Sra III",
    role: "Board Member",
    category: "Board",
    history: "Bringing essential traditional insight, Nana Nuben Sra III facilitates critical land negotiations and ensures harmonious relationships between SHC and local communities.",
    image: "/images/ourteam.jpg"
  },
  {
    name: "Gloria Arthur",
    role: "Head of Human Resources",
    category: "Management",
    history: "Modernizing the SHC workforce from the Accra head office, Gloria focuses on talent development and creating a high-performance culture across all regional and zonal offices.",
    image: "/images/ourteam1.jpg"
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          <ImageSlider
            images={[
              "/images/ourteam.jpg",
              "/images/ourteam1.jpg",
              "/images/shc.jpg",
              "/images/shc1.jpg",
              "/images/shc2.jpg",
              "/images/shc3.jpg",
              "/images/shc4.jpg",
              "/images/shc5.jpg",
              "/images/shc6.jpg",
              "/images/shc7.jpg",
              "/images/shc8.jpg",
              "/images/shc9.jpg",
              "/images/shc10.jpg",
              "/images/shc11.jpg",
              "/images/shc12.jpg",
              "/images/shc13.jpg",
              "/images/shc14.jpg",
              "/images/shc15.jpg",
            ]}
            autoPlay={true}
            interval={5000}
            className="h-full"
          />
          {/* Blended Overlay for text and image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-shc-dark/50 via-shc-dark/40 to-shc-dark/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <Star className="w-4 h-4 text-shc-blue-light" />
              The Nation&apos;s No. 1 Builder
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
              Building Ghana&apos;s
              <span className="text-shc-blue-light block mt-2"> Future</span>, One Home at a Time
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              Since 1956, the State Housing Company Limited has been at the
              forefront of providing quality, affordable homes for Ghanaians.
              Your dream home awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-shc-dark text-white font-bold rounded-xl hover:bg-gray-900 transition-colors text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Become a Homeowner
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-shc-blue-light">68+</p>
                <p className="text-white/70 text-sm">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-shc-blue-light">30,000+</p>
                <p className="text-white/70 text-sm">Homes Built</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-shc-blue-light">8</p>
                <p className="text-white/70 text-sm">Active Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group"
              >
                <stat.icon className="w-8 h-8 text-shc-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-shc-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Homeowner - 3 Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-shc-blue/10 text-shc-blue text-sm font-semibold rounded-full mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-shc-dark mb-4">
              Become a Homeowner in 3 Easy Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We&apos;ve simplified the home buying process so you can move from
              browsing to moving in as smoothly as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-shc-blue-light rounded-full flex items-center justify-center text-shc-dark font-bold text-sm shadow-md">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-shc-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-shc-blue" />
                </div>
                <h3 className="text-xl font-bold text-shc-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-shc-blue text-white font-semibold rounded-xl hover:bg-shc-blue-light transition-colors shadow-md"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-shc-blue-light/10 text-amber-700 text-sm font-semibold rounded-full mb-4">
                Featured Estates
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-shc-dark">
                Our Latest Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-shc-blue font-semibold hover:gap-3 transition-all"
            >
              View All Projects
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.name} {...property} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-shc-blue font-semibold"
            >
              View All Projects
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-shc-dark mb-4">
              Quick Access
            </h2>
            <p className="text-gray-600 text-lg">
              Navigate to the information you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-shc-blue/20"
              >
                <div
                  className={`w-14 h-14 ${link.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <link.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-shc-dark mb-2 group-hover:text-shc-blue transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {link.description}
                </p>
                <span className="inline-flex items-center gap-1 text-shc-blue font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-shc-blue/10 text-shc-blue text-sm font-semibold rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-shc-dark mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The visionaries driving Ghana's housing transformation forward
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col overflow-hidden"
              >
                {/* Photo Area */}
                <div className="relative h-72 w-full overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase shadow-md ${leader.category === 'Board' ? 'bg-blue-900' : 'bg-yellow-600'}`}>
                      {leader.category}
                    </span>
                  </div>
                </div>

                {/* Bio Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-blue-950 leading-tight mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-bold text-yellow-600 mb-3 tracking-wide uppercase">
                    {leader.role}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed italic">
                    "{leader.history}"
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

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Own Your Dream Home?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Take the first step towards homeownership today. Our team is ready to
            guide you through every stage of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-shc-dark text-white font-bold rounded-xl hover:bg-gray-900 transition-colors text-lg shadow-xl hover:shadow-2xl"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

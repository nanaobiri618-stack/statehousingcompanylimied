import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - State Housing Company Limited",
  description: "Meet the leadership team at State Housing Company Limited",
};

const allLeaders = [
  // --- 1. CORPORATE GOVERNANCE (BOARD) ---
  {
    name: "Mr. Ralph Roland",
    role: "Chairman of the Board",
    category: "Board",
    history: "Inaugurated as Chairman in mid-2025, Mr. Roland provides the strategic direction and policy oversight required to steer SHC toward massive urban development and public-private partnerships.",
    image: "/images/profileimages/ralph-roland.png"
  },
  {
    name: "Mr. John S. Bawah",
    role: "Managing Director / Board Member",
    category: "Management",
    history: "A dual-role leader, Mr. Bawah manages daily operations and bridges the gap between board policy and construction. He is the architect of the current 'Nation's No. 1 Builder' revitalization campaign.",
    image: "/images/profileimages/john-s-bawah.png"
  },
  {
    name: "Nana Nuben Sra III",
    role: "Board Member",
    category: "Board",
    history: "Bringing essential traditional insight, Nana Nuben Sra III facilitates critical land negotiations and ensures harmonious relationships between SHC and local communities.",
    image: "/images/profileimages/nana-nuben-sra-iii.png"
  },
  {
    name: "Mr. Kofi Boamah Mensah",
    role: "Board Member",
    category: "Board",
    history: "A financial strategist on the board, Mr. Mensah oversees audit compliance and ensures the company's long-term financial sustainability for future housing projects.",
    image: "/images/profileimages/kofi-boamah-mensah.png"
  },
  {
    name: "Mr. Chris Pobee Abbey",
    role: "Board Member",
    category: "Board",
    history: "With a background in technical excellence, Mr. Abbey advises the board on construction standards and innovative building technologies to reduce costs for Ghanaians.",
    image: "/images/profileimages/chris-pobee-abbey.png"
  },
  {
    name: "Mr. Michael Atta Agyei",
    role: "Board Member",
    category: "Board",
    history: "Focuses on corporate governance and administrative efficiency, ensuring that SHC operations align with national legal frameworks and transparent practices.",
    image: "/images/profileimages/michael-atta-agyei.png"
  },
  {
    name: "Mr. Barnabas Ninfom Tanaab",
    role: "Board Member",
    category: "Board",
    history: "A strong advocate for regional balance, Mr. Tanaab focuses on expanding the State Housing footprint into the Northern and Savannah sectors of the country.",
    image: "/images/profileimages/barnabas-ninfom-tanaab.png"
  },
  {
    name: "Nana Agyekum Kusi Ababio",
    role: "Board Member",
    category: "Board",
    history: "Focuses on social housing impact and community engagement, ensuring that SHC estates provide more than just shelter, but integrated community living.",
    image: "/images/profileimages/nana-agyekum-kusi-ababio.png"
  },
  {
    name: "Mr. Nurudeen Issifu Haruna",
    role: "Board Member",
    category: "Board",
    history: "Specializes in Public-Private Partnerships (PPP), helping SHC explore external investments to accelerate affordable housing delivery.",
    image: "/images/profileimages/nurudeen-issifu-haruna.png"
  },

  // --- 2. EXECUTIVE MANAGEMENT ---
  {
    name: "Gloria Arthur",
    role: "Head of Human Resources",
    category: "Management",
    history: "Modernizing the SHC workforce from the Accra head office, Gloria focuses on talent development and creating a high-performance culture across all regional and zonal offices.",
    image: "/images/profileimages/gloria-arthur.png"
  },
  {
    name: "Margaret Zokli",
    role: "Head of Administration",
    category: "Management",
    history: "The operational engine of SHC, Margaret manages the logistics, fleet, and corporate administration necessary to support massive housing projects nationwide.",
    image: "/images/profileimages/margaret-zokli.png"
  },
  {
    name: "Esq. Rita A. Fofie",
    role: "Head of Legal",
    category: "Management",
    history: "As the lead legal strategist, Esq. Fofie ensures all property titles are secure and litigation-free, protecting the investments of every State Housing homeowner.",
    image: "/images/profileimages/rita-a-fofie.png"
  }
];

export default function TeamBiographies() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-shc-blue via-blue-600 to-shc-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/profileimages/team-award.png" 
            alt="SHC Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-shc-blue/80 via-blue-600/80 to-shc-dark/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-full mb-6 border border-white/30">
              Our Leadership
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet the Visionaries
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              The dedicated team driving Ghana's housing transformation forward
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-slate-50 py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {allLeaders.map((leader, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col overflow-hidden"
              >
                {/* Photo Area */}
                <div className="relative h-80 w-full overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/ourteam.jpg";
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase shadow-md ${leader.category === 'Board' ? 'bg-blue-900' : 'bg-yellow-600'}`}>
                      {leader.category}
                    </span>
                  </div>
                </div>

                {/* Bio Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-blue-950 leading-tight mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-bold text-yellow-600 mb-4 tracking-wide uppercase">
                    {leader.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    "{leader.history}"
                  </p>
                </div>
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
            Join Our Team
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Be part of Ghana's housing transformation. Explore career opportunities with State Housing Company.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-shc-dark text-white font-bold rounded-2xl hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

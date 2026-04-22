import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Building2,
  Globe,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - State Housing Company Limited",
  description:
    "Get in touch with the State Housing Company Limited. Visit our head office in Accra or reach us by phone, email, or WhatsApp.",
};

const contactMethods = [
  {
    title: "Head Office",
    description: "Ring Road West, Accra, Ghana",
    detail: "Digital Address: GA-447-9832",
    icon: MapPin,
    color: "bg-blue-50 text-shc-blue-light",
    link: "https://www.google.com/maps/search/?api=1&query=Ring+Road+West+Accra+Ghana",
  },
  {
    title: "Phone",
    description: "+233 (0) 302 776 200",
    detail: "+233 (0) 302 776 201",
    icon: Phone,
    color: "bg-blue-50 text-blue-600",
    link: "tel:+233302776200",
  },
  {
    title: "Email",
    description: "info@statehousing.gov.gh",
    detail: "We respond within 24-48 hours",
    icon: Mail,
    color: "bg-purple-50 text-purple-600",
    link: "mailto:info@statehousing.gov.gh",
  },
  {
    title: "WhatsApp",
    description: "+233 (0) 24 123 4567",
    detail: "Available Mon-Fri, 8AM-5PM",
    icon: MessageCircle,
    color: "bg-blue-50 text-blue-100",
    link: "https://wa.me/233241234567",
  },
  {
    title: "Working Hours",
    description: "Monday - Friday",
    detail: "8:00 AM - 5:00 PM GMT",
    icon: Clock,
    color: "bg-amber-50 text-amber-600",
    link: null,
  },
  {
    title: "Postal Address",
    description: "P.O. Box 404",
    detail: "Accra, Ghana",
    icon: Globe,
    color: "bg-red-50 text-red-600",
    link: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-sm font-semibold rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Have questions about our properties, services, or application
              process? Our team is here to help. Reach us through any of the
              channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              method.link ? (
                <a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-shc-dark mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-sm mb-1">
                    {method.description}
                  </p>
                  <p className="text-gray-500 text-sm">{method.detail}</p>
                </a>
              ) : (
                <div
                  key={method.title}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors group"
                >
                  <div
                    className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-shc-dark mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-sm mb-1">
                    {method.description}
                  </p>
                  <p className="text-gray-500 text-sm">{method.detail}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-shc-dark mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue-light/20 focus:border-shc-blue-light"
                      placeholder="name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue-light/20 focus:border-shc-blue-light"
                      placeholder="name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue-light/20 focus:border-shc-blue-light"
                    placeholder="useratmail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue-light/20 focus:border-shc-blue-light"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue-light/20 focus:border-shc-blue-light">
                    <option>General Inquiry</option>
                    <option>Property Inquiry</option>
                    <option>Application Status</option>
                    <option>Mortgage Information</option>
                    <option>Complaint / Feedback</option>
                    <option>Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue-light/20 focus:border-shc-blue-light resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-shc-dark text-white font-semibold rounded-xl hover:bg-gray-900 transition-colors shadow-xl hover:shadow-2xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map / Office Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-shc-blue-light" />
                  <h3 className="text-xl font-bold text-shc-dark">
                    Head Office Location
                  </h3>
                </div>
                <div className="rounded-xl h-64 overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6896233679655!2d-0.2156!3d5.5600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207a1a8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sRing+Road+West%2C+Accra%2C+Ghana!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-shc-blue-light mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium text-sm">
                        Physical Address
                      </p>
                      <p className="text-gray-500 text-sm">
                        Ring Road West, Near Ako Adjei Interchange, Accra
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-shc-blue-light mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium text-sm">
                        Digital Address
                      </p>
                      <p className="text-gray-500 text-sm">GA-447-9832</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-shc-blue-light mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium text-sm">
                        Office Hours
                      </p>
                      <p className="text-gray-500 text-sm">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-500 text-sm">
                        Saturday: 9:00 AM - 1:00 PM (By appointment)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-shc-blue-light/5 rounded-2xl p-8 border border-shc-blue-light/10">
                <h3 className="text-lg font-bold text-shc-dark mb-3">
                  Quick Contact
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  For urgent inquiries, reach us directly:
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+233302776200"
                    className="flex items-center gap-3 text-shc-blue-light font-medium text-sm hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +233 (0) 302 776 200
                  </a>
                  <a
                    href="mailto:info@statehousing.gov.gh"
                    className="flex items-center gap-3 text-shc-blue-light font-medium text-sm hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    info@statehousing.gov.gh
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-blue-100 font-medium text-sm hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp: +233 (0) 24 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

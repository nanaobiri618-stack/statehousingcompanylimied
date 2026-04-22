"use client";

import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  Download,
  Banknote,
  ClipboardList,
  Home,
  Landmark,
  AlertCircle,
  Phone,
  Send,
  User,
  Mail,
  MapPin,
  Building2,
} from "lucide-react";
import { projects } from "@/lib/projects";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const buyingSteps = [
  {
    step: 1,
    title: "Browse & Select",
    icon: Home,
    description:
      "Explore our estate portfolio on the Projects page and identify the property that suits your needs and budget.",
  },
  {
    step: 2,
    title: "Submit Application",
    icon: ClipboardList,
    description:
      "Download and complete the application form. Submit it along with the non-refundable processing fee of GH₵ 1,000.00.",
  },
  {
    step: 3,
    title: "Verification & Approval",
    icon: CheckCircle2,
    description:
      "Our team reviews your application and supporting documents. Upon approval, you'll receive an offer letter.",
  },
  {
    step: 4,
    title: "Secure Financing",
    icon: Landmark,
    description:
      "Arrange payment through mortgage facilitation with our banking partners (e.g., Republic Bank) or direct payment.",
  },
  {
    step: 5,
    title: "Make Initial Deposit",
    icon: Banknote,
    description:
      "Pay the required initial deposit as specified in your offer letter to secure your property.",
  },
  {
    step: 6,
    title: "Move In!",
    icon: Home,
    description:
      "Complete all payments and documentation, receive your keys, and move into your new home!",
  },
];

const requiredDocuments = [
  "Completed application form",
  "Copy of valid Ghana Card or Passport",
  "Two (2) passport-sized photographs",
  "Proof of income (pay slips or bank statements)",
  "Employment letter or business registration certificate",
  "Non-refundable processing fee receipt (GH₵ 1,000.00)",
];

function ApplyForm() {
  const searchParams = useSearchParams();
  const preselectedProject = searchParams.get("project") || "";

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-sm font-semibold rounded-full mb-4">
              Application & Buying Guide
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Path to Homeownership Starts Here
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              We&apos;ve made the home buying process as straightforward as
              possible. Fill out the form below or apply via our Google Form.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-shc-dark mb-2">
                Application Form
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to begin your application. All fields
                marked with * are required.
              </p>

              <form className="space-y-5">
                {/* Personal Info */}
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-shc-dark mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-shc-blue" />
                    Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Surname *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="Enter your surname"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Other Names
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="Enter other names"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Gender *
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue">
                        <option value="">Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Marital Status *
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue">
                        <option value="">Select status</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                        <option>Widowed</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-shc-dark mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-shc-blue" />
                    Contact Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Residential Address *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="Enter your residential address"
                      />
                    </div>
                  </div>
                </div>

                {/* Employment */}
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-shc-dark mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-shc-blue" />
                    Employment Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Occupation *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="Your occupation"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Employer / Business Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="Employer or business name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Monthly Income Range *
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue">
                        <option value="">Select range</option>
                        <option>Below GH₵ 2,000</option>
                        <option>GH₵ 2,000 - GH₵ 5,000</option>
                        <option>GH₵ 5,000 - GH₵ 10,000</option>
                        <option>GH₵ 10,000 - GH₵ 20,000</option>
                        <option>Above GH₵ 20,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ghana Card Number *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                        placeholder="GHA-XXXXXXXXX-X"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Selection */}
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-shc-dark mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5 text-shc-blue" />
                    Property Selection
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Preferred Estate / Project *
                      </label>
                      <select
                        defaultValue={preselectedProject}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue"
                      >
                        <option value="">Select a project</option>
                        {projects.map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name} — {p.location}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Preferred House Type *
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue">
                        <option value="">Select type</option>
                        <option>2 Bedroom Semi-Detached</option>
                        <option>2 Bedroom Detached</option>
                        <option>2 Bedroom Apartment</option>
                        <option>3 Bedroom Semi-Detached</option>
                        <option>3 Bedroom Detached</option>
                        <option>3 Bedroom Apartment</option>
                        <option>4 Bedroom Detached</option>
                        <option>4 Bedroom Executive Bungalow</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Payment Method *
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-shc-blue/20 focus:border-shc-blue">
                        <option value="">Select payment method</option>
                        <option>Outright Payment</option>
                        <option>Mortgage</option>
                        <option>Installment (Min. 50% deposit)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-shc-dark text-white font-bold rounded-xl hover:bg-gray-900 transition-colors shadow-xl hover:shadow-2xl"
                  >
                    <Send className="w-5 h-5" />
                    Submit Application
                  </button>
                  <a
                    href="https://forms.gle/rL8X8Woe63iiqifr7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-center px-8 py-3.5 bg-shc-blue text-white font-bold rounded-xl hover:bg-shc-blue-light transition-colors shadow-md"
                  >
                    Apply via Google Form
                  </a>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Buying Steps */}
              <div className="bg-shc-gray rounded-2xl p-6">
                <h3 className="text-lg font-bold text-shc-dark mb-4">
                  3-Step Buying Guide
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Fill A Form",
                      desc: "Pick up a form from any of our offices or submit one online.",
                    },
                    {
                      step: 2,
                      title: "Pay Processing Fee",
                      desc: "Pay a non-refundable processing fee of GH₵ 1,000.00.",
                    },
                    {
                      step: 3,
                      title: "Make Initial Deposit",
                      desc: "Make an initial deposit — a percentage of the selling price.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-8 h-8 bg-shc-blue rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-shc-dark text-sm">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-shc-gray rounded-2xl p-6">
                <h3 className="text-lg font-bold text-shc-dark mb-4">
                  Required Documents
                </h3>
                <ul className="space-y-2.5">
                  {requiredDocuments.map((doc) => (
                    <li key={doc} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-shc-blue mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-xs">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Form */}
              <div className="bg-shc-blue/5 rounded-2xl p-6 border border-shc-blue/10">
                <Download className="w-8 h-8 text-shc-blue mb-3" />
                <h3 className="text-lg font-bold text-shc-dark mb-2">
                  Download Form
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Prefer to apply offline? Download the PDF form and submit at
                  any SHC office.
                </p>
                <a
                  href="https://statehousing.gov.gh/wp-content/uploads/2025/07/SHC-house-purchase-form-updated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-shc-dark text-white font-bold rounded-lg hover:bg-gray-900 transition-colors text-sm shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>

              {/* Contact */}
              <div className="bg-shc-gray rounded-2xl p-6">
                <h3 className="text-lg font-bold text-shc-dark mb-3">
                  Need Help?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  WhatsApp us for assistance:
                </p>
                <a
                  href="https://wa.me/233502452271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-shc-blue font-semibold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  050 245 2271
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading form...</div>}>
      <ApplyForm />
    </Suspense>
  );
}

import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Shield,
  ArrowRight,
} from "lucide-react";

interface PropertyCardProps {
  name: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  features?: string[];
  image?: string;
  href: string;
}

export default function PropertyCard({
  name,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  features = [],
  image,
  href,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-blue-100 overflow-hidden group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-50 flex items-center justify-center">
            <Maximize className="w-16 h-16 text-blue-500" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
            {price}
          </span>
        </div>
        {features.includes("Gated Community") && (
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 px-2 py-1 bg-white/90 text-blue-500 text-xs font-medium rounded-full">
              <Shield className="w-3 h-3" />
              Gated
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-blue-700 mb-1 group-hover:text-blue-500 transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-1 text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-blue-100">
          <div className="flex items-center gap-1.5 text-gray-600">
            <BedDouble className="w-4 h-4" />
            <span className="text-sm">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Maximize className="w-4 h-4" />
            <span className="text-sm">{area}</span>
          </div>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="px-2 py-0.5 bg-blue-50 text-shc-blue text-xs rounded-md font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-shc-blue font-semibold text-sm hover:gap-3 transition-all"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

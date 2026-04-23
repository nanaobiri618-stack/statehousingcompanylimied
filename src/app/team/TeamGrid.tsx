"use client";

import React from "react";

interface Leader {
  name: string;
  role: string;
  category: string;
  history: string;
  image: string;
}

export default function TeamGrid({ leaders }: { leaders: Leader[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {leaders.map((leader, index) => (
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
  );
}

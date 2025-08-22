import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Hero Image */}
      <img
        src="/assets/hero-photography.jpg"
        alt="Photography Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Capturing <span className="text-pink-400">Moments</span>,  
          Creating <span className="text-indigo-400">Memories</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          From weddings to kids' smiles, we freeze your most precious memories in timeless frames.  
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/wedding"
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-medium shadow-lg transition"
          >
            Wedding Stories
          </Link>
          <Link
            to="/kids"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium shadow-lg transition"
          >
            Kids Moments
          </Link>
        </div>
      </div>
    </section>
  );
}

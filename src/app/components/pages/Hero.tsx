import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to MathMinds
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Simplify your math challenges with our smart AI-powered solver.
        </p>
        <Link href="/math">
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/hero/hero1.png",
  "/hero/hero2.png",
  "/hero/hero3.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s delay per image
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 blur">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={images[index]}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Red Overlay */}
      <div className="absolute inset-0 z-10 bg-red-900 opacity-40" />

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Legal Help, Simplified.
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
        Securely create and store your legal documents online with NextGenLegal. Sign in to access your personal document vault, and return to them anytime.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
        <a href="/documents">
            <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 shadow">
            Make Documents
            </button>
        </a>  
        <a href="/lawyers">
            <button className="bg-transparent border border-white px-6 py-2 rounded-md hover:bg-white hover:text-red-600">
            Find a Lawyer
            </button>
        </a>
        </div>
      </div>
    </div>
  );
}

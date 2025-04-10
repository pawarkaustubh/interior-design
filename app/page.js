"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-gray-900">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-extrabold text-[#1D4ED8] tracking-wide">
                DesignAI
              </h1>
            </div>
            <div className="flex items-center">
              <Link href="/dashboard">
                <Button className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Transform Your Space with AI
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize your room's potential with our AI-powered interior design tool.
            Upload a photo of your space and see instant design transformations 
            tailored to your style preferences.
          </p>
        </div>

        {/* Before-After Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Before Image */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="/before.avif" 
              alt="Before Transformation" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
              Before
            </span>
          </div>

          {/* After Image */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="/after.avif" 
              alt="After Transformation" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
              After AI Transformation
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

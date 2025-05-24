'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Play, Clock, Users, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroVideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-6">
          <Star className="h-4 w-4" />
          <span>See the magic happen</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Transform Your Career
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            In Real Time
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Watch how ResumeLM uses cutting-edge AI to craft personalized, ATS-optimized resumes that land interviews
        </p>
      </div>

      {/* Video Container with Stats */}
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Left Stats */}
        <div className="space-y-6 lg:order-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">2 mins</p>
                <p className="text-sm text-gray-600">Average completion time</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50k+</p>
                <p className="text-sm text-gray-600">Professionals helped</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Video */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="group cursor-pointer lg:order-2">
              <div className="relative">
                {/* Main Video Container */}
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-700">
                  <Image
                    src="/thumbnail.png"
                    alt="ResumeLM Demo Video"
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    width={800}
                    height={600}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                      <div className="relative bg-white rounded-full p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-gray-900 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    3:24
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  ✨ AI-Powered
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  🚀 Instant Results
                </div>
              </div>
            </div>
          </DialogTrigger>

          <DialogContent className="max-w-6xl border-0 bg-black/95 p-2">
            <DialogTitle className="sr-only">ResumeLM Demo Video</DialogTitle>
            <DialogDescription className="sr-only">
              Watch how ResumeLM transforms your resume with AI technology
            </DialogDescription>
            <div className="aspect-video rounded-xl overflow-hidden">
              <video
                controls
                autoPlay={isOpen}
                className="h-full w-full"
                src="/ResumeLM.mp4"
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Right Stats */}
        <div className="space-y-6 lg:order-3">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                <p className="text-sm text-gray-600">User satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <ArrowRight className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3x</p>
                <p className="text-sm text-gray-600">More interview calls</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">Join thousands of professionals who have transformed their careers</p>
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
          <span>✓ ATS-Optimized</span>
          <span>✓ Industry-Specific</span>
          <span>✓ Instant Download</span>
          <span>✓ Multiple Formats</span>
        </div>
      </div>
    </section>
  );
}
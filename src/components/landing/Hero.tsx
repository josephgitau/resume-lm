"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { AuthDialog } from "@/components/auth/auth-dialog";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Shield, Globe, Target, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stats = [
    { value: "10K+", label: "Resumes Created" },
    { value: "89%", label: "Interview Rate" },
    { value: "100%", label: "Free to Use" },
    { value: "2min", label: "Setup Time" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-24 md:py-32 px-4 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              AI-Powered Resume Builder
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              Build Better Resumes
              <span className="block text-violet-400 mt-2">with AI</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Create ATS-optimized resumes tailored for tech roles. Land more interviews with AI-powered optimization that increases your chances by up to <span className="text-cyan-400 font-semibold">300%</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <AuthDialog>
              <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                <span className="flex items-center gap-2">
                  Create Resume Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
            </AuthDialog>
            
            <Link 
              href="https://github.com/olyaiy/resume-lm" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="View source code on GitHub"
            >
              View on GitHub
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 text-slate-400 mb-20">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Privacy-First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-violet-400" />
              <span>AI-Powered</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Resume Preview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Before Resume */}
          <div className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-slate-600 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-slate-300 mb-2">Before AI</h3>
              <p className="text-sm text-slate-500">Generic resume template</p>
            </div>
            <div className="bg-white/95 rounded-xl p-4 h-64 space-y-3">
              <div className="h-4 bg-slate-400 rounded w-32" />
              <div className="h-3 bg-slate-300 rounded w-24" />
              <div className="border-b border-slate-200 my-3" />
              <div className="space-y-2">
                <div className="h-3 bg-slate-300 rounded w-20" />
                <div className="h-2 bg-slate-200 rounded w-full" />
                <div className="h-2 bg-slate-200 rounded w-5/6" />
                <div className="h-2 bg-slate-200 rounded w-4/5" />
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-slate-300 rounded w-16" />
                <div className="flex gap-1">
                  <div className="h-4 bg-slate-200 rounded px-2 w-12" />
                  <div className="h-4 bg-slate-200 rounded px-2 w-16" />
                  <div className="h-4 bg-slate-200 rounded px-2 w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* AI Process */}
          <div className="group p-6 rounded-2xl bg-violet-500/10 border border-violet-400/30 hover:border-violet-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Magic</h3>
              <p className="text-sm text-violet-200">Intelligent optimization</p>
            </div>
            <div className="space-y-4">
              {[
                { text: "Content Analysis", icon: "🧠" },
                { text: "ATS Optimization", icon: "🎯" },
                { text: "Keyword Enhancement", icon: "✨" },
                { text: "Format Polishing", icon: "🎨" }
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-violet-500/20 border border-violet-400/20">
                  <span className="text-lg">{step.icon}</span>
                  <span className="text-violet-200 font-medium">{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After Resume */}
          <div className="group p-6 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-white mb-2">After AI</h3>
              <p className="text-sm text-emerald-200">Optimized & professional</p>
              <div className="absolute -top-2 -right-2 px-2 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                +300% better
              </div>
            </div>
            <div className="bg-white/95 rounded-xl p-4 h-64 space-y-3 relative">
              <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <div className="h-4 bg-slate-700 rounded w-40 font-semibold" />
              <div className="h-3 bg-slate-600 rounded w-32" />
              <div className="border-b border-slate-200 my-3" />
              <div className="space-y-2">
                <div className="h-3 bg-emerald-500 rounded w-24" />
                <div className="h-2 bg-slate-700 rounded w-full" />
                <div className="h-2 bg-slate-600 rounded w-full" />
                <div className="h-2 bg-slate-500 rounded w-5/6" />
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-cyan-500 rounded w-12" />
                <div className="flex gap-1">
                  <div className="h-4 bg-emerald-200 rounded px-2 w-14 border border-emerald-400" />
                  <div className="h-4 bg-cyan-200 rounded px-2 w-18 border border-cyan-400" />
                  <div className="h-4 bg-violet-200 rounded px-2 w-12 border border-violet-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client"
import React from 'react';
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Sparkles, Target, Brain, MessageSquare, BarChart3, FileText, Star, ArrowRight, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import { AuthDialog } from "@/components/auth/auth-dialog";
import { useRef } from 'react';

const FeatureHighlights = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Resume Assistant",
      description: "Advanced AI analyzes your experience and suggests optimized content that passes ATS systems and impresses recruiters.",
      metrics: "90% more effective bullets",
      benefits: [
        "Smart content suggestions based on your experience",
        "Real-time feedback and optimization",
        "Industry-specific keyword optimization",
        "ATS compatibility scoring"
      ],
      color: "violet"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Smart Performance Analytics",
      description: "Get detailed insights into your resume's effectiveness with comprehensive scoring and improvement recommendations.",
      metrics: "3x higher response rates",
      benefits: [
        "ATS compatibility analysis",
        "Keyword density optimization",
        "Industry benchmark comparisons",
        "Performance tracking dashboard"
      ],
      color: "cyan"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Dynamic Cover Letter Generator",
      description: "Create compelling, personalized cover letters that perfectly match job requirements and your unique experience.",
      metrics: "Save 30+ minutes per application",
      benefits: [
        "Job-specific personalization",
        "Professional tone optimization",
        "Achievement highlighting",
        "Multi-format export options"
      ],
      color: "emerald"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Job-Tailored Optimization",
      description: "Automatically adapt your resume for each job application with intelligent matching and keyword optimization.",
      metrics: "89% interview success rate",
      benefits: [
        "One-click job matching",
        "Custom resume variations",
        "Skills gap analysis",
        "Interview preparation insights"
      ],
      color: "pink"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Resumes Created", icon: <FileText className="h-5 w-5" /> },
    { value: "89%", label: "Interview Rate", icon: <Target className="h-5 w-5" /> },
    { value: "4.9/5", label: "User Rating", icon: <Star className="h-5 w-5" /> },
    { value: "2 min", label: "Setup Time", icon: <Rocket className="h-5 w-5" /> },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      violet: { bg: "bg-violet-500", text: "text-violet-400", border: "border-violet-400/30" },
      cyan: { bg: "bg-cyan-500", text: "text-cyan-400", border: "border-cyan-400/30" },
      emerald: { bg: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-400/30" },
      pink: { bg: "bg-pink-500", text: "text-pink-400", border: "border-pink-400/30" },
    }
    return colors[color as keyof typeof colors] || colors.violet;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 bg-slate-900" 
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium">
              <Sparkles className="inline h-4 w-4 mr-2" />
              AI-Powered
            </span>
            <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
              <Target className="inline h-4 w-4 mr-2" />
              ATS-Optimized
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Resume Intelligence
            <span className="block text-violet-400 mt-2">That Delivers Results</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Transform your career with AI-powered resume optimization that increases interview chances by up to <span className="text-cyan-400 font-semibold">300%</span>
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300"
              >
                {/* Feature Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colorClasses.bg}`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full bg-slate-700/50 border ${colorClasses.border} text-sm ${colorClasses.text} font-medium`}>
                      {feature.metrics}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Benefits List */}
                <div className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className={`h-5 w-5 ${colorClasses.text} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-12 rounded-2xl bg-slate-800/50 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers with AI-powered resume optimization
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <AuthDialog>
                <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                  <span className="flex items-center gap-2">
                    Start Building Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
              </AuthDialog>
              
              <Link 
                href="https://github.com/olyaiy/resume-lm" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-slate-800/50"
              >
                View on GitHub
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-violet-400" />
                <span>2-Minute Setup</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights;

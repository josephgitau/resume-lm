"use client"

import { useMemo, useRef } from "react";
import { Check, Sparkles, Star, Zap } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface PlanFeature {
  text: string;
  highlight?: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  badge?: string;
  popular?: boolean;
  features: PlanFeature[];
  ctaText: string;
  ctaLink: string;
  ctaSecondary?: boolean;
  icon?: React.ReactNode;
}

export function PricingPlans() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const plans = useMemo<PricingPlan[]>(() => [
    {
      name: "Free Explorer",
      price: "$0",
      description: "Perfect for getting started with AI-powered resume building",
      icon: <Star className="h-6 w-6" />,
      features: [
        { text: "Use your own API keys" },
        { text: "2 base resumes" },
        { text: "5 tailored resumes" },
        { text: "Self-host option available" },
        { text: "Community support" },
      ],
      ctaText: "Start Free Journey",
      ctaLink: "/auth/register",
      ctaSecondary: true,
    },
    {
      name: "Pro Innovator",
      price: "$20",
      period: "/month",
      description: "Unlock unlimited potential with premium AI capabilities",
      badge: "Most Popular",
      popular: true,
      icon: <Zap className="h-6 w-6" />,
      features: [
        { text: "Access to all premium AI models", highlight: true },
        { text: "Unlimited base resumes", highlight: true },
        { text: "Unlimited tailored resumes", highlight: true },
        { text: "Priority customer support", highlight: true },
        { text: "Advanced analytics & insights" },
      ],
      ctaText: "Upgrade to Pro",
      ctaLink: "/auth/register",
    }
  ], []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 bg-slate-900" 
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 mb-6">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span className="text-violet-200 font-medium text-sm">Choose Your Plan</span>
          </div>
          
          <h2
            id="pricing-heading"
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Pricing Plans
          </h2>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of AI-driven resume building with transparent pricing designed for every career stage
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative overflow-hidden rounded-2xl transition-all duration-300
                ${plan.popular 
                  ? "bg-gradient-to-br from-violet-600/20 to-violet-800/20 border border-violet-400/50 shadow-2xl hover:shadow-violet-500/25" 
                  : "bg-slate-800/50 border border-slate-700 hover:border-slate-600"
                }
                hover:scale-105
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-4 py-1.5 bg-violet-500 text-white text-sm font-bold rounded-full">
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${plan.popular ? 'bg-violet-500' : 'bg-slate-700'}`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-slate-400 text-sm">{plan.description}</p>
                  </div>
                </div>
                
                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-400">{plan.period}</span>
                    )}
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link 
                  href={plan.ctaLink} 
                  className={`
                    block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 mb-8
                    ${plan.ctaSecondary 
                      ? "border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white hover:bg-slate-800/50" 
                      : "bg-violet-600 hover:bg-violet-500 text-white shadow-lg hover:shadow-xl"
                    }
                    hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900
                  `}
                >
                  {plan.ctaText}
                </Link>
                
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">What's included:</h4>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`${feature.highlight ? "font-semibold text-white" : "text-slate-300"}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400">
            Need something custom? 
            <Link href="/contact" className="text-violet-400 hover:text-violet-300 ml-2 underline">
              Let's talk
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingPlans;
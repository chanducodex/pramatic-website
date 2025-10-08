'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Play, Award, Users, Clock, ArrowDown } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Rotate through stats every 3 seconds
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Award, label: "Years Combined Experience", value: "350+" },
    { icon: Users, label: "Projects Completed", value: "2,500+" },
    { icon: Clock, label: "Average Delivery Time", value: "< 5 Days" }
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#140B2C] via-[#2E1065] to-[#0B061A] text-white flex items-center">
      {/* Enhanced backdrop with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large hero crane background image */}
        <img
          src="/images/hero-crane.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-25 select-none"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140B2C]/80 via-[#2E1065]/60 to-[#0B061A]/80" />
        
        {/* Additional crane silhouette overlay */}
        
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Suspended steel beams with cables - Multiple positions */}
        
        {/* Left beam structure */}
        <div className="absolute left-[12%] top-8 hidden md:block">
          <div className="origin-top animate-sway">
            <div className="mx-auto h-2 w-32 rounded bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] shadow-md shadow-purple-500/20" />
            <div className="mx-auto h-24 w-[2px] bg-gradient-to-b from-white/40 to-white/10" />
            <div className="animate-cable-lift" style={{ animationDelay: '0s' }}>
              <div className="mx-auto w-4 h-4 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
        
        {/* Center-left beam structure */}
        <div className="absolute left-[28%] top-12 hidden md:block">
          <div className="origin-top animate-sway">
            <div className="mx-auto h-3 w-40 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] shadow-lg shadow-purple-500/25" />
            <div className="mx-auto h-36 w-[2px] bg-gradient-to-b from-white/50 to-white/15" />
            <div className="animate-cable-lift" style={{ animationDelay: '1.2s' }}>
              <div className="mx-auto w-5 h-5 bg-gradient-to-b from-gray-200 to-gray-600 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
        
        {/* Main center beam structure */}
        <div className="absolute left-1/2 top-16 -translate-x-1/2 hidden lg:block">
          <div className="origin-top animate-sway">
            <div className="mx-auto h-3 w-48 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] shadow-lg shadow-purple-500/20" />
            <div className="mx-auto h-32 w-[3px] bg-gradient-to-b from-white/40 to-white/10" />
            <div className="animate-cable-lift" style={{ animationDelay: '2s' }}>
              <div className="mx-auto w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
        
        {/* Center-right beam structure */}
        <div className="absolute right-[28%] top-10 hidden lg:block">
          <div className="origin-top animate-sway">
            <div className="mx-auto h-2 w-36 rounded bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] shadow-md shadow-purple-500/20" />
            <div className="mx-auto h-28 w-[2px] bg-gradient-to-b from-white/35 to-white/10" />
            <div className="animate-cable-lift" style={{ animationDelay: '0.8s' }}>
              <div className="mx-auto w-4 h-4 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
        
        {/* Right beam structure */}
        <div className="absolute right-[12%] top-14 hidden lg:block">
          <div className="origin-top animate-sway">
            <div className="mx-auto h-3 w-28 rounded-lg bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] shadow-lg shadow-purple-500/30" />
            <div className="mx-auto h-20 w-[2px] bg-gradient-to-b from-white/45 to-white/15" />
            <div className="animate-cable-lift" style={{ animationDelay: '1.8s' }}>
              <div className="mx-auto w-3 h-3 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-md" />
            </div>
          </div>
        </div>
        
        {/* Additional steel rod structures */}
        <div className="absolute left-[65%] top-6 hidden lg:block">
          <div className="origin-top animate-sway">
            <div className="mx-auto h-2 w-24 rounded bg-gradient-to-r from-[#8B5CF6]/80 to-[#A855F7]/80 shadow-sm shadow-purple-500/15" />
            <div className="mx-auto h-16 w-[1px] bg-gradient-to-b from-white/30 to-white/5" />
            <div className="animate-cable-lift" style={{ animationDelay: '2.5s' }}>
              <div className="mx-auto w-2 h-2 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full shadow-sm" />
            </div>
          </div>
        </div>

        {/* Floating sparks around the scene */}
        <div className="absolute left-[18%] top-[25%] animate-bounce">
          <span className="spark" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute right-[20%] top-[35%] animate-bounce">
          <span className="spark" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute left-[35%] top-[75%] animate-bounce">
          <span className="spark" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute right-[45%] top-[60%] animate-bounce">
          <span className="spark" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="absolute left-[70%] top-[80%] animate-bounce">
          <span className="spark" style={{ animationDelay: '2.5s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20h20V20H20z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge with animation */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Award className="w-4 h-4 text-purple-400" />
                Industry Leaders in Steel Detailing
                <ChevronRight className="w-3 h-3 text-purple-400" />
              </span>
            </div>

            {/* Main headline with staggered animation */}
            <div className={`space-y-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-pretty text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 animate-pulse">
                  structural vision
                </span>
                into reality
              </h1>
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-xl text-slate-200/90 leading-relaxed max-w-2xl">
                Leading Structural Steel Detailing and Engineering company with precision-crafted solutions. 
                Experts in <span className="text-purple-300 font-semibold">AISC, CISC, NISD, AWS, OSHA</span> and more.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-8 py-4 text-white font-semibold text-lg shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span aria-hidden className="spark-mask" />
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/20 px-8 py-4 text-white hover:bg-white/10 font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:border-white/40"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right side - Enhanced Stats Section */}
          <div className="lg:col-span-5">
            <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              
              {/* Enhanced Stats Card */}
              <div className="relative">
                {/* Background card with enhanced styling */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10 shadow-2xl shadow-purple-500/10">
                  <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Why Choose Us
                  </h3>
                  
                  {/* Rotating stats with enhanced styling */}
                  <div className="text-center space-y-8 min-h-[160px] flex flex-col justify-center">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <div
                          key={index}
                          className={`transition-all duration-500 ${
                            currentStat === index
                              ? 'opacity-100 translate-y-0 scale-100'
                              : 'opacity-0 translate-y-4 scale-95 absolute inset-0'
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-4">
                            <div className="p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                              <Icon className="w-16 h-16 text-purple-400" />
                            </div>
                            <div className="text-5xl font-bold text-white drop-shadow-lg">
                              {stat.value}
                            </div>
                            <div className="text-slate-300 text-xl font-medium max-w-sm">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Enhanced progress indicators */}
                  <div className="flex justify-center gap-3 mt-8">
                    {stats.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentStat === index ? 'bg-purple-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating sparks around the card */}
                <div className="absolute -top-4 -left-4">
                  <span className="spark" style={{ animationDelay: '0s' }} />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <span className="spark" style={{ animationDelay: '1.5s' }} />
                </div>
                <div className="absolute top-2 right-4">
                  <span className="spark" style={{ animationDelay: '0.8s' }} />
                </div>
                <div className="absolute bottom-12 -left-1">
                  <span className="spark" style={{ animationDelay: '2.2s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer group">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

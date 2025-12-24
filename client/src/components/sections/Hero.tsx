import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Check, Layers, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#f8fafc]">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient z-0" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0 pointer-events-none" />

      {/* Diagonal Clip - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white z-10" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-slate-200 text-xs font-medium text-slate-600 mb-6 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Now taking new projects - Q1 openings
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary leading-[1.1] mb-6 tracking-tight">
              Calm your business chaos with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">smart systems.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We replace manual busywork with simple digital systems that teams actually use. Modernize your operations without changing who you are.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Book a quick systems audit
              </Button>
              <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-white">
                See use cases <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right Floating UI */}
          <div className="relative h-[400px] md:h-[500px] w-full hidden md:block">
            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-10 left-0 right-10 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-20 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6 border-b border-slate-50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="h-2 w-24 bg-slate-100 rounded-full" />
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-4 w-4 rounded bg-slate-200" />
                      <div className="h-2 w-12 bg-slate-200 rounded-full" />
                    </div>
                    <div className="h-6 w-16 bg-slate-300 rounded-md mb-2" />
                    <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-accent rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-default">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <Check size={14} />
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-24 bg-slate-200 rounded-full" />
                        <div className="h-1.5 w-16 bg-slate-100 rounded-full" />
                      </div>
                    </div>
                    <div className="h-2 w-12 bg-emerald-100 rounded-full" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Stats Card - Top Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-30 w-48"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 text-accent rounded-lg">
                  <BarChart3 size={18} />
                </div>
                <span className="text-sm font-semibold text-slate-700">Efficiency</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">+124%</div>
              <div className="text-xs text-emerald-500 font-medium">↑ This month</div>
            </motion.div>

            {/* Floating Mobile Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-48 bg-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-800 z-30 transform rotate-[-2deg]"
            >
              <div className="bg-slate-800 rounded-xl p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                   <div className="h-1 w-8 bg-slate-600 rounded-full" />
                   <div className="h-4 w-4 bg-accent rounded-full opacity-80" />
                </div>
                <div className="space-y-3">
                  <div className="h-12 bg-slate-700/50 rounded-lg border border-slate-700/50" />
                  <div className="h-12 bg-slate-700/50 rounded-lg border border-slate-700/50" />
                  <div className="h-12 bg-slate-700/50 rounded-lg border border-slate-700/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

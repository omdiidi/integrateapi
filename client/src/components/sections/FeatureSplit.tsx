import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, FileText, Settings, Database } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  label: string;
  points: string[];
  align?: "left" | "right";
  index: number;
}

export function FeatureSplit() {
  const features: FeatureProps[] = [
    {
      title: "Workflow Digitization",
      description: "Stop passing physical papers around. We turn your checklists, forms, and approval processes into digital workflows that track themselves.",
      label: "Eliminate Paperwork",
      icon: <FileText size={20} />,
      points: ["Digital intake forms", "Auto-assigned tasks", "Instant status updates"],
      align: "left",
      index: 0
    },
    {
      title: "Tool Integrations",
      description: "Your scheduling tool should talk to your CRM, and your CRM should talk to your invoicing. We bridge the gaps so you don't have to copy-paste data.",
      label: "Connect Everything",
      icon: <Settings size={20} />,
      points: ["Sync POS with Accounting", "Automate customer emails", "Centralized client records"],
      align: "right",
      index: 1
    },
    {
      title: "Operational Dashboards",
      description: "Get visibility without the busywork. See exactly where every job, order, or patient is in your process at a glance.",
      label: "Real-time Clarity",
      icon: <Database size={20} />,
      points: ["Live project tracking", "Revenue forecasting", "Team capacity planning"],
      align: "left",
      index: 2
    }
  ];

  return (
    <div className="bg-white">
      {features.map((feature, i) => (
        <FeatureSection key={i} {...feature} />
      ))}
    </div>
  );
}

function FeatureSection({ title, description, label, icon, points, align, index }: FeatureProps) {
  return (
    <section className={`py-20 md:py-32 overflow-hidden ${index % 2 === 1 ? "bg-slate-50/50" : "bg-white"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col gap-16 items-center ${align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-wide uppercase mb-4">
              <span className="p-1.5 bg-accent/10 rounded-md">{icon}</span>
              {label}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <ul className="space-y-4 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-accent h-5 w-5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            
            <Link href="/how-it-works">
              <Button variant="outline" className="rounded-full border-slate-200 text-slate-700 hover:text-primary hover:border-primary">
                See how it works <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Graphic Content - Abstract UI */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
             <div className="relative aspect-[4/3] bg-white rounded-2xl shadow-xl border border-slate-100 p-8 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
                
                {/* Mock UI Elements based on index/type */}
                {index === 0 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                      <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
                      <div className="h-8 w-24 bg-accent/10 rounded-full" />
                    </div>
                    <div className="space-y-3 pt-2">
                       <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-lg flex items-center px-4">
                          <div className="h-3 w-3 rounded-full border border-slate-300 mr-3" />
                          <div className="h-2 w-1/2 bg-slate-200 rounded" />
                       </div>
                       <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-lg flex items-center px-4 opacity-70">
                          <div className="h-3 w-3 rounded-full border border-slate-300 mr-3" />
                          <div className="h-2 w-2/3 bg-slate-200 rounded" />
                       </div>
                       <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-lg flex items-center px-4 opacity-40">
                          <div className="h-3 w-3 rounded-full border border-slate-300 mr-3" />
                          <div className="h-2 w-1/3 bg-slate-200 rounded" />
                       </div>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="relative h-full w-full flex items-center justify-center">
                    {/* Central Hub */}
                    <div className="absolute z-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
                        <Settings size={20} />
                      </div>
                      <div className="h-2 w-16 bg-slate-200 rounded" />
                    </div>
                    
                    {/* Satellites */}
                    <div className="absolute top-4 left-4 p-3 bg-slate-50 rounded-lg border border-slate-100 transform -rotate-6">
                      <div className="h-6 w-6 bg-blue-100 rounded mb-1" />
                      <div className="h-1.5 w-10 bg-slate-200 rounded" />
                    </div>
                    
                    <div className="absolute bottom-8 right-8 p-3 bg-slate-50 rounded-lg border border-slate-100 transform rotate-3">
                      <div className="h-6 w-6 bg-green-100 rounded mb-1" />
                      <div className="h-1.5 w-10 bg-slate-200 rounded" />
                    </div>

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none text-slate-200 z-0">
                      <line x1="30%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                )}

                {index === 2 && (
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="col-span-2 bg-slate-50 rounded-lg p-3 border border-slate-100">
                      <div className="flex items-end gap-2 h-20 pb-2 border-b border-slate-200">
                         <div className="flex-1 bg-accent/20 rounded-t h-[40%]" />
                         <div className="flex-1 bg-accent/40 rounded-t h-[70%]" />
                         <div className="flex-1 bg-accent/60 rounded-t h-[50%]" />
                         <div className="flex-1 bg-accent rounded-t h-[90%]" />
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                       <div className="h-16 w-16 rounded-full border-4 border-slate-200 border-t-accent mx-auto" />
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-2">
                       <div className="h-2 w-full bg-slate-200 rounded" />
                       <div className="h-2 w-full bg-slate-200 rounded" />
                       <div className="h-2 w-2/3 bg-slate-200 rounded" />
                    </div>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

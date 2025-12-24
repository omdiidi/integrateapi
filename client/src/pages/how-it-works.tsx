import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, Map, Wrench, GraduationCap, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
              Our Process
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We don't disrupt your business. We map how you already work, then build the systems to support it.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="audit" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-slate-100 p-1 rounded-full border border-slate-200">
                  <TabsTrigger value="audit" className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    1. Audit
                  </TabsTrigger>
                  <TabsTrigger value="map" className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    2. Map
                  </TabsTrigger>
                  <TabsTrigger value="build" className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    3. Build
                  </TabsTrigger>
                  <TabsTrigger value="train" className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                    4. Train
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-8 md:p-12 min-h-[400px]">
                <TabsContent value="audit" className="mt-0 animate-in fade-in duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                        <Search size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Deep Dive Discovery</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        We spend time with your team to understand exactly where the bottlenecks are. We don't guess—we watch how you work today, identifying repetitive tasks and data entry errors.
                      </p>
                      <ul className="space-y-3">
                        <li className="text-sm font-medium text-slate-700">• Interview key stakeholders</li>
                        <li className="text-sm font-medium text-slate-700">• Review current software stack</li>
                        <li className="text-sm font-medium text-slate-700">• Identify "shadow IT" (spreadsheets)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-64 flex items-center justify-center">
                       {/* Abstract Representation */}
                       <div className="space-y-2 w-full max-w-xs">
                          <div className="h-2 w-full bg-slate-200 rounded animate-pulse" />
                          <div className="h-2 w-2/3 bg-slate-200 rounded animate-pulse delay-75" />
                          <div className="h-2 w-3/4 bg-slate-200 rounded animate-pulse delay-150" />
                       </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="map" className="mt-0 animate-in fade-in duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="h-12 w-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 mb-6">
                        <Map size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Process Mapping</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Before we write code, we design the ideal workflow. We map out data flows, decision points, and automation triggers to ensure nothing falls through the cracks.
                      </p>
                       <ul className="space-y-3">
                        <li className="text-sm font-medium text-slate-700">• Visual workflow diagrams</li>
                        <li className="text-sm font-medium text-slate-700">• Data schema planning</li>
                        <li className="text-sm font-medium text-slate-700">• ROI estimation</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-64 flex items-center justify-center relative overflow-hidden">
                       <svg className="absolute inset-0 w-full h-full text-slate-300" stroke="currentColor" fill="none" strokeWidth="2">
                          <path d="M50,150 C150,50 250,250 350,150" strokeDasharray="5 5" />
                          <circle cx="50" cy="150" r="4" fill="currentColor" />
                          <circle cx="350" cy="150" r="4" fill="currentColor" />
                       </svg>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="build" className="mt-0 animate-in fade-in duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-6">
                        <Wrench size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Implementation</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        We configure your tools, build the integrations, and set up the dashboards. We work in a staging environment first so your live operations are never disrupted.
                      </p>
                       <ul className="space-y-3">
                        <li className="text-sm font-medium text-slate-700">• API integration development</li>
                        <li className="text-sm font-medium text-slate-700">• Dashboard configuration</li>
                        <li className="text-sm font-medium text-slate-700">• Rigorous testing</li>
                      </ul>
                    </div>
                     <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-64 flex items-center justify-center">
                        <div className="flex gap-2">
                           <div className="h-16 w-16 bg-white rounded shadow-sm border border-slate-200" />
                           <div className="h-16 w-16 bg-white rounded shadow-sm border border-slate-200" />
                           <div className="h-16 w-16 bg-white rounded shadow-sm border border-slate-200" />
                        </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="train" className="mt-0 animate-in fade-in duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-6">
                        <GraduationCap size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Training & Handoff</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Tools are useless if no one uses them. We train your team, provide documentation, and stay on standby for 30 days to ensure adoption.
                      </p>
                       <ul className="space-y-3">
                        <li className="text-sm font-medium text-slate-700">• Live training sessions</li>
                        <li className="text-sm font-medium text-slate-700">• Video walkthroughs</li>
                        <li className="text-sm font-medium text-slate-700">• 30-day support window</li>
                      </ul>
                    </div>
                     <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-64 flex items-center justify-center">
                        <div className="text-center">
                           <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                              <CheckCircle2 size={32} />
                           </div>
                           <div className="font-semibold text-slate-700">System Live</div>
                        </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
            
            <div className="mt-16 text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                   Start your audit
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

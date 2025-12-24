import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Stethoscope, Truck, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function UseCases() {
  const cases = [
    {
      title: "Private Clinics",
      icon: <Stethoscope size={24} className="text-blue-500" />,
      problem: "Staff spends 15 hours/week calling patients for reminders and manually entering intake forms into the EMR.",
      solution: "Automated SMS reminders with confirmation sync. Digital intake forms sent 24h prior that auto-populate the EMR draft.",
      result: "Front desk time reduced by 70%. No-shows dropped by 40%.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Local Logistics",
      icon: <Truck size={24} className="text-amber-500" />,
      problem: "Dispatchers text drivers manually. Proof of delivery is a crumpled paper slip. Invoices are delayed by weeks.",
      solution: "Mobile driver app for status updates and photo POD. Instant trigger to accounting software to draft invoice upon delivery.",
      result: "Invoices sent same-day. Cash flow improved by 14 days. Zero lost paperwork.",
      color: "bg-amber-50 border-amber-100"
    },
    {
      title: "Niche Retail",
      icon: <ShoppingBag size={24} className="text-purple-500" />,
      problem: "Inventory in physical store doesn't match Shopify. Overselling leads to refunds and angry emails.",
      solution: "Real-time 2-way sync between POS and Shopify. Automated low-stock alerts to vendors.",
      result: "Zero overselling incidents. Inventory counting time reduced by 90%.",
      color: "bg-purple-50 border-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-24"
      >
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
              Real Results
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We solve specific, messy operational problems for small businesses. Here is what that looks like in practice.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12">
              {cases.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col md:flex-row">
                  <div className={`p-8 md:w-1/3 ${item.color} flex flex-col justify-center`}>
                    <div className="bg-white w-fit p-3 rounded-xl shadow-sm mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                  </div>
                  <div className="p-8 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">The Problem</h4>
                      <p className="text-slate-700 leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">The Solution</h4>
                      <p className="text-slate-700 leading-relaxed">{item.solution}</p>
                    </div>
                    <div className="md:col-span-2 border-t border-slate-100 pt-6">
                       <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2">The Result</h4>
                       <p className="text-lg font-medium text-primary">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
           <h2 className="text-3xl font-bold font-heading text-primary mb-8">Do you have similar problems?</h2>
           <Link href="/contact">
             <Button size="lg">Let's fix them <ArrowRight className="ml-2 w-4 h-4" /></Button>
           </Link>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}

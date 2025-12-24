import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-8">
              Practical automation for the real world.
            </h1>
            <div className="prose prose-lg text-slate-600 prose-headings:font-heading prose-headings:text-primary">
              <p>
                We started IntegrateAPI because we were tired of seeing small businesses struggle with "modern" software that made their lives harder.
              </p>
              <p>
                You don't need another app. You don't need AI to write your emails (probably). You need your scheduling tool to talk to your calendar, and your invoices to send themselves when the job is done.
              </p>
              <h3>Our Mission</h3>
              <p>
                To replace manual busywork with simple, reliable digital systems that teams actually use.
              </p>
              <h3>How We Work</h3>
              <p>
                We are operators first. We care about reliability, speed, and clarity. We don't use buzzwords, and we don't build things you don't need.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-100">
               <h3 className="text-2xl font-bold font-heading text-primary mb-6">Join us</h3>
               <p className="text-slate-600 mb-8">
                 We are always looking for pragmatic engineers and process designers.
               </p>
               <Button variant="outline">View Careers</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

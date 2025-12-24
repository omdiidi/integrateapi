import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function FinalCTA() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 tracking-tight">
            Stop drowning in admin work.
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Let's build the systems your business deserves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                Book a quick systems audit
              </Button>
            </Link>
            <a href="mailto:hello@integrateapi.com">
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-slate-200 hover:bg-slate-50">
                Email us directly
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

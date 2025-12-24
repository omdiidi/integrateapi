import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold font-heading tracking-tight text-primary mb-4 block">
              IntegrateAPI
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Modernizing operations for forward-thinking businesses. We connect your tools so you can focus on growth.
            </p>
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} IntegrateAPI.
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-accent transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">System Integration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Data Dashboards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>hello@integrateapi.com</li>
              <li>Serving clients worldwide</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
          <p>Made with calm precision.</p>
        </div>
      </div>
    </footer>
  );
}

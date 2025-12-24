import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Please provide a bit more detail"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock API call
    console.log(values);
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Message received",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  }

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
           <div className="container mx-auto px-4 text-center">
             <h1 className="text-4xl font-bold font-heading text-primary mb-4">Contact Us</h1>
             <p className="text-slate-600">Let's discuss your operational challenges.</p>
           </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Message Sent!</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Thanks for reaching out. We'll review your details and get back to you shortly to schedule your audit.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send another message
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <Label>Name</Label>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Label>Email</Label>
                            <FormControl>
                              <Input placeholder="jane@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Company</Label>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <Label>How can we help?</Label>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your current workflow bottlenecks..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full">
                      Book Systems Audit
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}

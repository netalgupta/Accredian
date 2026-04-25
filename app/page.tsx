import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Features from "@/components/sections/Features";
import Programs from "@/components/sections/Programs";
import HowItWorks from "@/components/sections/HowItWorks";
import MetricsBanner from "@/components/sections/MetricsBanner";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Programs />
      <HowItWorks />
      <MetricsBanner />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}

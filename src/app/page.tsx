import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Scale from "@/components/scale/Scale";
import Developers from "@/components/developers/Developers";
import Customers from "@/components/customers/Customers";
import Pricing from "@/components/pricing/Pricing";
import Trusted from "@/components/trusted/Trusted";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Scale />
      <Developers />
      <Customers />
      <Pricing />
      <Trusted />
      <Contact />
    </main>
  );
}

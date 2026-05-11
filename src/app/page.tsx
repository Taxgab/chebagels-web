import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Locations from "@/components/Locations";
import SocialProof from "@/components/SocialProof";
import DeliveryCTA from "@/components/DeliveryCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <SocialProof />
        <Locations />
        <DeliveryCTA />
      </main>
      <Footer />
    </>
  );
}

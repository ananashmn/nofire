import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import Product from "../components/Product";
import OrderConfigurator from "../components/OrderConfigurator";
import Applications from "../components/Applications";
import Benefits from "../components/Benefits";
import WhyChooseUs from "../components/WhyChooseUs";
import BusinessSection from "../components/BusinessSection";
import TechnicalDocuments from "../components/TechnicalDocuments";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import MobileOrderBar from "../components/MobileOrderBar";
import OrderDrawer from "../components/OrderDrawer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-16 sm:pb-0">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Product />
        <OrderConfigurator />
        <Applications />
        <Benefits />
        <WhyChooseUs />
        <BusinessSection />
        <TechnicalDocuments />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileOrderBar />
      <OrderDrawer />
    </div>
  );
}

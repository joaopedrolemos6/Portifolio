import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

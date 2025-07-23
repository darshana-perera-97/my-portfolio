import { Navbar, Footer } from "./components";
import Hero from "./sections/Hero";
import Clients from "./sections/Clients";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Testimonial from "./sections/Testimonial";
import PopularClients from "./sections/PopularClients";
import ContactForm from "./sections/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <PopularClients />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App; 
import About from "./components/About";
import Homebanner from "./components/Homebanner";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactLeft from "./components/ContactLeft";
import Clients from "./components/Clients";
import Achievement from "./components/Achievement";



export default function Home() {
  return (
      <div className="overflow-hidden">
        <Homebanner />
        <Services />
        <About />
        <Achievement />
        <Testimonials />
        <Clients />
         <ContactLeft />
       
      </div>
  );
}


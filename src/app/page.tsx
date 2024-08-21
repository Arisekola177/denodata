import About from "./components/About";
import Homebanner from "./components/Homebanner";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactLeft from "./components/ContactLeft";
import Clients from "./components/Clients";
import Achievement from "./components/Achievement";
import TrustedAlly from "./components/TrustedAlly";
import Divider from "./components/Divider";




export default function Home() {
  return (
      <div className="overflow-hidden">
        <Homebanner />
        <TrustedAlly />
        <Services />
        <Divider />
        <About />
        <Achievement />
        <Testimonials />
        <Clients />
         <ContactLeft />
       
      </div>
  );
}


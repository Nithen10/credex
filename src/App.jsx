import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';


function App() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 dark:text-white transition-colors">
      <ChatWidget />
      <Navbar />
      <main className="flex-1 p-6 text-center">
        {/* Centered Welcome message */}
        <h2 className="text-3xl font-bold mb-4">
          Welcome to <span className="text-blue-600">SoftSell</span>
        </h2>
        <p>Explore a trusted way to trade your unused software licenses.</p>
      </main>

      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      
      
    </div>
  );
}

export default App;

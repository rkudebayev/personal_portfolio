import About from './about/About';
import './App.css';
import Technologies from './technologies/Technologies';
import Footer from './footer/Footer';
import ContactUs from './Contacts/Contacts';
import Header from './Header/Header';
import Projects from './projects/Projects';

function App() {
  return (
    <div className="App">
      
        <Header />
        <About />
        <Technologies />
        <Projects />
        <ContactUs />
        <Footer />
      
    </div>
  );
}

export default App;

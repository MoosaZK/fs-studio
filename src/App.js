import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/HeroSection';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  let component
  switch (window.location.pathname) {
    case "/contact":
      component = <Contact />
      break;
    case "/fs-studio":
      component = <Home />
      break;
    default:
      break;
  }

  return (
    <div className="App ">
      <NavBar />
      {component}
    </div>
  );
}

export default App;

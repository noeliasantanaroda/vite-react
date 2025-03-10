import './App.css';
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  
  return (
    <>
    <div className='app'>
      <Navbar />
      <Homepage />
      <TechStack />
      <Experience />
      <Projects />
      <ScrollToTopButton />
      </div>
    </>
  )
}

export default App

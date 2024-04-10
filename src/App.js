import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Projects2 from './components/Projects2';
import Skills from './components/Skills';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Nav />
      <Nav2 />
      <About />
      <Services />
      {/* <Skills /> */}
      <Projects2 />
      <Contact />
    </div>
  );
}

export default App;


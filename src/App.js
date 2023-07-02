import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <Nav2 />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

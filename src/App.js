import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <Nav />
      <Nav2 />
      {/* <About /> */}
      <Landing />
      <Services />
      {/* <Skills /> */}
      {/* <Projects2 /> */}
      <About />
      <Contact />
    </div>
  );
}

export default App;


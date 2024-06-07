import './App.css';
import About2 from './components/About2';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Services from './components/Services';
import Services2 from './components/Services2';



function App() {
  return (
    <div className="App">
      <Nav />
      <Nav2 />
      {/* <About /> */}
      <Landing />
      <Services />
      {/* <Services2 /> */}
      <About2 />
      <Contact />
    </div>
  );
}

export default App;


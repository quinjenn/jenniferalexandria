import './App.css';
import About2 from './components/About2';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Landing from './components/Landing';
import Services from './components/Services';



function App() {
  return (
    <div className="App">
      <Nav />
      <Nav2 />
      {/* <About /> */}
      <Landing />
      <Services />
      <About2 />
      <Contact />
    </div>
  );
}

export default App;


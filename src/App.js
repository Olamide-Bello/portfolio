import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;

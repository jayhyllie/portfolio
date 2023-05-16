import style from "./styles/App.module.scss";
import Sidebar from "./pages/Sidebar";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className={style.main}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

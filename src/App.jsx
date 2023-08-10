import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Skills from "./layouts/Skills";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";

function App() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Home /></div>
      <div><About /></div>
      <div><Skills /></div>
      <div><Projects /></div>
      <div><Contact /></div>
    </div>
  );
}

export default App;

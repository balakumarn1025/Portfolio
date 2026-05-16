import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./Contact";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  // // using useNavigate to navigate to different pages
  // const navigate=useNavigate();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download_resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;

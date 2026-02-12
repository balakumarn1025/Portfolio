import { Routes, Route,  } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Education from "./pages/Education";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Contact";
import Download_resume from "./pages/Download_resume";


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
        <Route path="/download_resume" element={<Download_resume />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

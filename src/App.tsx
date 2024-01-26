import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Home from "./pages/home";
import Footer from "./components/Footer";

function App() {
  const headerLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <Router>
      <Header links={headerLinks} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

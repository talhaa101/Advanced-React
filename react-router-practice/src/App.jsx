import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>

        <br />

        <Link to="/about">About</Link>

        <br />

        <Link to="/contact">Contact</Link>

        <br />

        <Link to="/services">Services</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />
      </Routes>

    </div>
  );
}

export default App;
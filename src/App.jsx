import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Nav from "./Nav";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    <Footer/>
    </>
  );
};
export default App;

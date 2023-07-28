import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import About from "./page/About";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Header from "./Header/Header";
import Portfolio from "./page/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/my-portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

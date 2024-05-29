import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import About from "./pages/About/About";
import Navigation from "./components/NavigationBar/Navigation";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";

function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;

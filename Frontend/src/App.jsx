import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/nav/About";
import NavService from "./pages/nav/NavService";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* This ensures scroll to top on every route change */}
      <ScrollToTop />

      <Routes>
        {/* Wrap each page inside MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><NavService /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;

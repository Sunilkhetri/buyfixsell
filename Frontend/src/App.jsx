import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/nav/About";
import ScrollToTop from "./components/ScrollToTop";
import ServiceNav from "./pages/nav/ServiceNav";

function App() {
  return (
    <Router>
      {/* This ensures scroll to top on every route change */}
      <ScrollToTop />

      <Routes>
        {/* Wrap each page inside MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><ServiceNav /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;

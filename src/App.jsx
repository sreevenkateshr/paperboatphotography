import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/layouts/Header";
import Home from "./Pages/Home";
import Footer from "./Components/layouts/Footer";

function App() {
  return (
    <Router>
      <Header />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

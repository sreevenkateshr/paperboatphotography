import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import AboutUs from "./Pages/AboutUs";
// import Contact from "./Pages/Contact";
// import Wedding from "./Pages/Wedding";
// import Birthday from "./Pages/Birthday";
// ... import all pages

// import MainLayout from "./Components/layouts/MainLayout";

function App() {
  return (
    <Router>
      {/* <MainLayout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/wedding" element={<Wedding />} />
          <Route path="/birthday" element={<Birthday />} /> */}
          {/* more routes */}
        </Routes>
      {/* </MainLayout> */}
    </Router>
  );
}

export default App;

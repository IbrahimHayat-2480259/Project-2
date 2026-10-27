import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Students from "./Pages/Students"; // Assuming you have this
import Courses from "./Pages/Courses"; // <-- The new page

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} /> {/* <-- The new route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
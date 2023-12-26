import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Members from "./views/members/Members";
import Gallery from "./views/gallery/Gallery";
import Login from "./views/login/Login";
import Register from "./views/register/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallary" element={<Gallery />} />
            <Route path="members" element={<Members />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

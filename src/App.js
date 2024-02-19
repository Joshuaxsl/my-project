import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import Services from "./components/pages/Services";
import Contacts from "./components/pages/Contacts";



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
  );
}

export default App;

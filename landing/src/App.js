 import ColorSchemesExample from './Compo/Navbar'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Compo/Home'
import About from './Compo/About'
import Blogs from './Compo/Blogs'
import Sign from './Compo/Sign'
import Bottom from './Compo/Bottom';
function App() {
  return (
    <div className="App">
      <ColorSchemesExample/>
      <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="sign" element={<Sign />} />
            </Routes>
            <Bottom/>
    </div>
  );
}

export default App;

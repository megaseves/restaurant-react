import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {Menu} from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/contact"} element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

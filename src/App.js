import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Contact} from "./pages/Contact";
import {Menu} from "./components/Menu";
import {MainPage} from "./pages/MainPage";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path={"/"} element={<MainPage />}/>
          <Route path={"/contact"} element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

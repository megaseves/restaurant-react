import './App.css';
import './Scrollbar.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {MainPage} from "./pages/MainPage";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path={"/"} element={<MainPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

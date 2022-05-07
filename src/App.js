import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CurrentlyReading from "./components/CurrentlyReading";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Read from "./components/Read";
import Search from "./components/Search";
import WantToRead from "./components/WantToRead";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/reading" element={<CurrentlyReading />}></Route>
        <Route exact path="/to-read" element={<WantToRead />}></Route>
        <Route exact path="/complete" element={<Read />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

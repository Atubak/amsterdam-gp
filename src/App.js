import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Schedule, Signup, Database } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/database" element={<Database />} />
      </Routes>
    </div>
  );
}

export default App;

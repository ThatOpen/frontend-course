import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import { BuildingViewer } from "./components/building-viewer";
import { MapViewer } from "./components/map-viewer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/building" element={<BuildingViewer />} />
          <Route path="/map" element={<MapViewer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

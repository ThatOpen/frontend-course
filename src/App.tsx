import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import { BuildingViewer } from "./components/building-viewer";
import { MapViewer } from "./components/map-viewer";
import { ContextProvider } from "./middleware/context-provider";

function App() {
  return (
    <ContextProvider>
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
    </ContextProvider>
  );
}

export default App;

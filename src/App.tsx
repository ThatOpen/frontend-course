import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/home";
import { BuildingViewer } from "./components/building-viewer";
import { MapViewer } from "./components/map/map-viewer";
import { ContextProvider } from "./middleware/context-provider";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/building" element={<BuildingViewer />} />
            <Route path="/map" element={<MapViewer />} />
            <Route path="/login" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;

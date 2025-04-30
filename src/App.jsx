import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  // const navigate = useNavigate(); // this hooke can only be invoe side a component in browserrouter
  return (
    <div>
      <BrowserRouter>
        
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/landing");
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

//to make a top level bar always on every screen just wrap the browserstack with div

export default App;

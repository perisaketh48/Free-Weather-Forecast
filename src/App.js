import './App.css';
import Weather from "./Weather/index.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resultweather from "./Resultweather/index.js";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/resultpage" element={<Resultweather />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

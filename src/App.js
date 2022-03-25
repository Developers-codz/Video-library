import "./App.css";
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";

function App() {
  return (
    <div className="App">
      Video Library
      <Routes>
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;

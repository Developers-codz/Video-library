import "./App.css";
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { Navbar, Aside } from "components";
import { Home, Liked, History, Playlist } from "page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Aside />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;

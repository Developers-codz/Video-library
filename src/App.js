import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import MockMan from "mockman-js";
import { Navbar, Aside } from "components";
import { Home, Liked, History, Playlist, Video } from "page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Aside />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" index element={<Home />} />
          <Route path=":videoId" element={<Video />} />
        </Route>

        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;

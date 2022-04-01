import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import MockMan from "mockman-js";
import { Navbar, Aside, ProtectedRoute, PublicRoute } from "components";
import {
  Home,
  Liked,
  History,
  Playlist,
  Video,
  Login,
  Signup,
  Profile,
} from "page";

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

        <Route element={<ProtectedRoute />}>
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />}>
            <Route path=":profileAction" element={<Profile />} />
          </Route>
          <Route path="/liked" element={<Liked />} />
        </Route>
        <Route path="/mockman" element={<MockMan />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import MockMan from "mockman-js";

import {
  Navbar,
  Aside,
  ProtectedRoute,
  PublicRoute,
  Modal,
  Toast,
  BottomNavigation
} from "components";
import {
  Home,
  Liked,
  History,
  Playlist,
  Video,
  Login,
  Signup,
  Profile,
  Pagenotfound,
  WatchLater,
} from "page";
import { useToast } from "context/toast-context";
import { Loader } from "components";
import { useAuth } from "context/auth-context";
import { useEffect } from "react";

function App() {
  const {
    isModalOpen: { modalState },
  } = useToast();
  const { isLoading,checkTokenHandler } = useAuth();

  useEffect(()=>{
    checkTokenHandler()
    
  },[])
  return (
    <>
      <Toast />
      <Modal />
      <div
        className="App"
        style={
          modalState
            ? { pointerEvents: "none", opacity: ".3" }
            : { pointerEvents: "auto", opacity: "1" }
        }
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Aside />

            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/video" element={<Home />}>
                <Route path=":videoId" element={<Video />} />
              </Route>

              <Route element={<ProtectedRoute />}>
                <Route path="/playlist" element={<Playlist />}>
                  <Route path=":playlistAction" element={<Playlist />} />
                </Route>
                <Route path="/history" element={<History />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="watchlater" element={<WatchLater />} />
                <Route path="/profile" element={<Profile />}>
                  <Route path=":profileAction" element={<Profile />} />
                </Route>
              </Route>
              <Route path="/mockman" element={<MockMan />} />
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Route>
              <Route path="/*" element={<Pagenotfound />} />
            </Routes>
            <BottomNavigation />
          </>
          
        )}
      </div>
    </>
  );
}

export default App;

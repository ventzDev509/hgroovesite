import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Bottom from "./components/bottom/bottom";
import SongPage from "./components/songPage/composant_song";
import Artiste_page from "./components/artistePage/Artiste_page";
import BottomNavigation from "./components/navigations/bottomNavigation";
import ResponsiveBottomPlay from "./components/bottom/responsiveBottomPlay";
import PlayingResponsive from "./components/bottom/Responsive_play";
import Dashbord from "./components/dasbord";
import { Notifications } from "react-push-notification";
import { DataProvider } from "./components/dataProvider/context";
import { DataProvider_user } from "./components/dataProvider/user";
import { DataProviderSong } from "./components/dataProvider/getSong";
import PageNotFound from "./components/404Page/404";
import Search from "./components/search/search";
import Register from "./components/forms/register";
import Login from "./components/forms/Login";
import User_Profile from "./components/user_profile";
import Update_profile from "./components/forms/update_Profile/update_profile";
import Navbar from "./components/navigations/BarreNavigate";
import Left_Navigation from "./components/navigations/leftNavifation";
import Cover_song from "./components/dasbord/newSong/cover";
import Song_drop_file from "./components/dasbord/newSong/songDrop";
import Song_details from "./components/dasbord/newSong/song_details";
import SongItem from "./components/dasbord/song";
import UpdateSong from "./components/dasbord/song/crud/update";

function App() {
  return (
    <>
      <DataProvider>
        <DataProvider_user>
          <DataProviderSong>
            <div id="all-item-site">
              <Notifications />
              <BrowserRouter>
                <div id="home-s">
                  <div id="flex">
                    <Left_Navigation />
                    <div id="item-home">
                      <Navbar />
                      <Routes>
                        {/* Home route */}
                        <Route path="/" element={<Home />}></Route>
                        {/* Song page route */}
                        <Route path="/song/:id" element={<SongPage />}></Route>

                        {/* Artist page route */}
                        <Route
                          path="/artist/:id"
                          element={<Artiste_page />}
                        ></Route>

                        {/* Search route */}
                        <Route path="/search" element={<Search />}></Route>

                        {/* Register route */}
                        <Route path="/register" element={<Register />}></Route>

                        {/* Login route */}
                        <Route path={"/Login"} element={<Login />}></Route>

                        {/* User profile route */}
                        <Route
                          path="/profile"
                          element={
                            <>
                              <User_Profile />
                            </>
                          }
                        ></Route>

                        {/* Update profile route */}
                        <Route
                          path="/update-profile"
                          element={
                            <>
                              <Update_profile />
                            </>
                          }
                        ></Route>

                        {/* Dashboard route */}
                        <Route path="/Dashboard" element={<Dashbord />}></Route>
                        <Route
                          path="/Dashboard/song"
                          element={
                            <>
                              <SongItem />
                            </>
                          }
                        ></Route>
                        {/* Add new song routes */}
                        <Route
                          path="/new-song/song"
                          element={<Song_drop_file />}
                        ></Route>
                        <Route
                          path="/new-song/cover"
                          element={<Cover_song />}
                        ></Route>
                        <Route
                          path={"/new-song/details"}
                          element={<Song_details />}
                        ></Route>
                        {/* crud song */}
                        <Route
                          path={"/Dashboard/update/:id"}
                          element={
                            <>
                              <UpdateSong />
                            </>
                          }
                        ></Route>

                        {/* Page not found route */}
                        <Route
                          path="*"
                          element={
                            <>
                              <PageNotFound />
                            </>
                          }
                        ></Route>
                      </Routes>
                    </div>
                  </div>
                </div>

                {/* Bottom navigation */}
                <Bottom />

                {/* Responsive bottom play */}
                <div id="menuRes">
                  <ResponsiveBottomPlay />
                  <BottomNavigation />
                </div>

                {/* Responsive playing */}
                <div id="res-bottom">
                  <PlayingResponsive />
                </div>
              </BrowserRouter>
            </div>
          </DataProviderSong>
        </DataProvider_user>
      </DataProvider>
    </>
  );
}

export default App;

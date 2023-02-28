import React from "react";
import Favorites from "./Components/Favorites";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <>
      <Header />
      <Profile />
      <Favorites />
      <Footer />
    </>
  );
};

export default App;

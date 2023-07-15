import React from "react";
import Feedback from "./components/Feedback";
import Heropage from "./components/Heropage";
import NavBar from "./components/NavBar";
import SpecialMenu from "./components/SpecialMenu";
import SubHero from "./components/SubHero";


function App() {

  return (
    <>
      <NavBar />
      <Heropage/>
      <SubHero/>
      <SpecialMenu/>
      <Feedback/>
     
    </>
  );
}

export default App;

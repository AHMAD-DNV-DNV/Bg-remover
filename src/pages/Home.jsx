import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import BgSlider from "../components/BgSlider";
import Testimorials from "../components/Testimorials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimorials />
      <Upload />
    </div>
  );
};

export default Home;

import React from "react";
import "./container.scss";
import Header from "../header/Header";
import Main from "../main/Main";
const Container = () => {
  return (
    <div className='mainContainer'>
      <Header />
      <Main />
    </div>
  );
};

export default Container;

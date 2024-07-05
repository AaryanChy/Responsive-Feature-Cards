import React from "react";
import "./main.scss";
import Card from "../cards/Card";
import { ReactComponent as icon_supervisor } from "../../images/icon-supervisor.svg";
const Main = () => {
  return (
    <div className='card-Container'>
      <div className='Inner-container1'>
        <Card
          title='Supervisor'
          className='supervisor'
          description='Uses data from past projects to provide better delivery estimates'
          Icon={icon_supervisor}
        />
      </div>
      <div className='Inner-container2'>
        <Card
          title='Team Builder'
          className='team'
          description='Scans our talent network to create the optimal team for your project'
        />
        <Card
          title='Karma'
          className='karma'
          description='Regularly evaluates our talent to ensure quality'
        />
      </div>
      <div className='Inner-container3'>
        <Card
          title='Calculator'
          className='calculator'
          description='Uses data from past projects to provide better delivery estimates'
        />
      </div>
    </div>
  );
};

export default Main;

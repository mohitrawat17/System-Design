import React from "react";
import { Link } from "react-router-dom";

const All_Sessions = () => {
  return (
    <div style={{width:'100%',height:'100%',display:'flex',margin:'50px',backgroundColor:'lightblue',padding:'10px',color:'#0000',fontWeight:'500px',fontSize:'19px'}}>
      <ul>
        <li>
          {" "}
          <Link to="/infinite-scroll"> Infinite Scroll</Link>
        </li>
        <li>
          {" "}
          <Link to="/accordion"> Accordion </Link>
        </li>
        <li>
          {" "}
          <Link to="/image-slider"> Image Slider </Link>
        </li>
        <li>
          {" "}
          <Link to="/zustand"> Zustand </Link>
        </li>
        <li>
          {" "}
          <Link to="/tik-tac-toe"> Tik Tac Toe </Link>
        </li>
        <li>
          {" "}
          <Link to="/parallax"> Parallax </Link>
        </li>
      </ul>
    </div>
  );
};

export default All_Sessions;

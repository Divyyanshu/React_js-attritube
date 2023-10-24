import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/seed/picsum/222/300";
const img3 = "https://picsum.photos/seed/picsum/210/300";
// const img4 = "https://picsum.photos/seed/picsum/250/300";
// const img5 = "https://picsum.photos/seed/picsum/230/300";
// const img6 = "https://picsum.photos/seed/picsum/270/300";
// const img7 = "https://picsum.photos/seed/picsum/280/300";
// const img8 = "https://picsum.photos/seed/picsum/290/300";
const link = "https://picsum.photos/"

ReactDOM.render(
  <div>
    <h1 className="heading">Hey This is Divyanshu tailor </h1>
    <div className="images">
    <img src={img1} alt="jai shree ram" />
    <img src={img2} alt="jai shree ram" />
    <a href={link} target="_lorem">
      <img src={img3} alt="jai shree ram" />
    </a>
    </div>
  </div>,
  document.getElementById("root")
);

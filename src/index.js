import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import './index.css'
import Heading from "./component/Heading";
import Paragraph from "./component/Paragraph";
import List from "./component/List";

// const img1 = "https://picsum.photos/seed/picsum/195/300";
// const img2 = "https://picsum.photos/seed/picsum/222/300";
// const img3 = "https://picsum.photos/seed/picsum/210/300";
// const img4 = "https://picsum.photos/seed/picsum/250/300";
// const img5 = "https://picsum.photos/seed/picsum/230/300";
// const img6 = "https://picsum.photos/seed/picsum/270/300";
// const img7 = "https://picsum.photos/seed/picsum/280/300";
// const img8 = "https://picsum.photos/seed/picsum/290/300";
// const link = "https://picsum.photos/";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = " ";
const cssStyle = {};

if (curDate >=1 && curDate < 12){
 greeting = "Good morning"
 cssStyle.color = "blue"
} else if (curDate >=12 && curDate < 16){
 greeting = "Good Afternoon"
 cssStyle.color = "orange"
} else if(curDate >= 16 && curDate < 20){
 greeting = "Good Evening"
 cssStyle.color = "green"
} else{
  greeting = "Good Night"
  cssStyle.color = "red"
}

ReactDOM.render(
<Fragment> <div><h1>HELLO ! SIR <span style={cssStyle}>{greeting}</span> </h1>
</div>
<Heading/>
<List/>
<Paragraph/>
</Fragment>
 ,document.getElementById("root")
);

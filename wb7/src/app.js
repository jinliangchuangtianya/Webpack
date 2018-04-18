import React from "react?dsad";
import ReactDom from "react-dom";

//import  style from "./common/style/main.css";
//import ac from "./common/style/ac.css";

import "font-awesome/css/font-awesome.css";
import style from "./main.css";
console.log(style);

ReactDom.render(
    <div className="fa fa-rocket">
        <span className={style.ot}>React</span>
    </div>,
    document.getElementById('root')
)
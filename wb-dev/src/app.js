import React from "react?dsad";
import ReactDom from "react-dom";

import "./common/style/main.css";
import ab from "./ab.css";
import cc from "./cc.scss";

import "font-awesome/css/font-awesome.css";
import bg from "./common/img/bg.png";
let dog = require("./common/img/dogs.jpg");

ReactDom.render(
    <div className="ot">
        <img src={bg} alt=""/>
        <img src={require("./common/img/mv.gif")} alt=""/>
        <p className={ab.ftsz + " " + cc.bg + " ooo"}>ppp</p>
        <p className="ooo">ppp</p>
        <i className="fa fa-rocket"></i> React
    </div>,
    document.getElementById('root')
)
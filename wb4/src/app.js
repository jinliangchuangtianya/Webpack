import React from "react";
import ReactDom from "react-dom";

import './common/style/main.css';

import dog from './common/img/dogs.jpg';
import bg from  './common/img/bg.png';
const mv = require('./common/img/mv.gif');

console.log(dog);

ReactDom.render(
    <div className="ret">
        React
        <img src={dog} alt=""/>
        <img src={bg} alt=""/>
        <img src={mv} alt=""/>
        <img src={ require('./common/img/mv.gif') } alt=""/>
    </div>,
    document.getElementById('root')
)
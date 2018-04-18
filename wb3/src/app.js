import React from "react";
import ReactDom from "react-dom";

import './common/style/main.css';

import dog from './common/img/dogs.jpg';
console.log(dog);

ReactDom.render(
    <div className="ret">
        React
        <img src={dog} alt=""/>
    </div>,
    document.getElementById('root')
)
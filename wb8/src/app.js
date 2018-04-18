import React from "react?dsad";
import ReactDom from "react-dom";

import "./common/style/main.scss";
import scss from "./main.scss";

ReactDom.render(
    <div className="ot">
        <span className={scss.ot}>React</span>
    </div>,
    document.getElementById('root')
)
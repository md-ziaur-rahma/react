import React from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AlertMe=(a)=>{
    alert(a);
}

const ArrowFun= ()=> {
    return (<button onClick={AlertMe.bind(this,"You Click Boodstrap Btn")} className="btn btn-info m-5">Arow Fun Btn</button>)
}

export default ArrowFun;
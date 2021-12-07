import React,{Component} from "react";

class Welcome extends Component{
    doThisFromClass(a){
        alert(a)
    }
    render(){
        return <div>
            <button onClick={this.doThisFromClass.bind(this,"Hello world form class component")}>Click Me</button>
            <h1>I am from {this.props.name} component</h1>
        </div>
        
    }
}

export default Welcome;
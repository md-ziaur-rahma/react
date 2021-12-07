import React,{Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class StateManagement extends Component{

    constructor(){
        super()
        var obj = {
            isBangladesh: false,
            district: "Feni",
            my_name: "Riyad",
            age: ["25","30","35"],
            weight: {
                class8: "35",
                class9: "40",
                class10: "48",
            }
        };
        this.state=obj;
    }

    changeValue=()=>{
        this.setState({district:"Dhaka",isBangladesh:true})
    }

    render (){
        return <div>
                <h2>Name : {this.state.my_name}</h2>
                <h2>District : {this.state.district}</h2>
                <h2>Age : {this.state.age[2]}</h2>
                <h2>Weight : {this.state.weight.class10}</h2>
                if({this.state.isBangladesh}) {
                    <h1>Bangladesh</h1>
                } else {
                    <h1>Pakistan</h1>
                }
            <button onClick={this.changeValue} className="btn btn-primary m-5" >Change Value</button>
            </div>
    }
}

export default StateManagement;
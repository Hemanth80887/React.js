import React,{Component} from "react";

class Page9 extends Component {
    constructor(props) {
        super(props)
        this.state={
            Quantity:1
        }  

    }
    handler1(val){
        this.setState({
            Quantity :this.state.Quantity +val
        })
    }
    handler2(val){
        if(this.state.Quantity <=1){
            this.setState({
                Quantity:1
            })
        }else{
            this.setState({
                Quantity: this.state.Quantity - val
            })
        }
    }

    render(){
        return(
            <div>
                <h1>Quantity = {this.state.Quantity}</h1>
                <button onClick={this.handler1.bind(this,1)}>Increment</button>
                <button disabled ={this.state.Quantity<=1}  onClick={this.handler2.bind(this,1)}>Decrement</button>
            </div>
        )
    }

}
export default Page9
import React,{Component} from "react";  

class Page8 extends Component{
    constructor (props){
        super (props)
        this.state ={
            num:0
        }
    }
    handler(val){
        console.log(`val =`, val)
        //this.state.num =val
        this.setState({   // to assign value to the state
            num: this.state.num + val
        })
    }

    render(){
        console.log(`component render with state = `,this.state.num)
        return(
            <div>
                <h2>States in React</h2>
                <h3>num= { this.state.num}</h3>
                <hr/>
                <button onClick={()=>this.handler(1)}>Add + 1</button> //direct
                <button onClick={this.handler.bind(this,10)}>Add + 10</button> //binding
                
            </div>
        )
    }
}
export default Page8
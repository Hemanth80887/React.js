import React,{Component} from "react";

//global variable
let x= 12;
const y = 24.44;
let view = true;
let colors =["red","yellow","blue","orange"]
let users=[{
    id:1,
    name:"Minto",
    email:"minto@gmail.com",
    phone:9868795954,
    address:{
        city: "bangalore"
    }
},{
    id:2,
    name:"Binto",
    email:"binto@gmail.com",
    phone:9868795955,
    address:{
        city: "Mysore"
    }
},{
    id:3,
    name:"Ainto",
    email:"ainto@gmail.com",
    phone:9868795956,
    address:{
        city: "Kolar"
    }
}
]

class Page5  extends Component {
    constructor(props) {
        super(props)
        //properties
        this.p = 1234.44;
        this.q = 435.45;
    }
    clickHandler(){
        alert("button clicked")
    }

    render() {
        //local
        let a = 256;
        const b = 123.33;

      return (
        <div>
          <h3>Variables and data binding class Component</h3>
          <h4> x = {x} </h4>
          <h4> y = {y} </h4>

          <hr/>

          <h4>a = {a}</h4>
          <h4>b = {b}</h4>
          <h4>sum = {a+b}</h4>
            <hr/>

          <h4>p = {this.p}</h4>
          <h4>q = {this.q}</h4>
          <h4>l = {this.p+this.q}</h4>
          <hr/>

          <h3>Boolean ={view ? <span>Say True</span>: <span> Say False</span>}</h3>

          <div>
            {
                colors?.map(function(item,index){
                    return(
                        <p key={index}>{item}</p>
                    )
                })
            }
          </div>
          <section>
            {
                users?.map((item,index)=>{
                    return (
                        <div key={index}>
                            <h3> {item?.name}</h3>
                            <p> email = {item?.email}</p>
                            <p> phone = {item?.phone}</p>
                            <p> address = {item?.address.city}</p>
                        </div>
                    )
                })
            }
          </section>
          <button onClick={this.clickHandler}>click me nigga</button>
        </div>
      )
    }
}
export default Page5
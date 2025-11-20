import React from "react";
  
// global variable

let x=55;
const y = 124.33;
let a ="Boy"
let colors =["red","yellow","blue","orange"]
let view = true;
let courses=[
    {
        id: 1,
        title: "frontend",
        duration: "4 months"
    },
     {
        id: 2,
        title: "backend",
        duration: "6 months"
    }

]

function Page6(props) {
    return(
        <div>
            <h2>Variabes in functional component</h2>
            <h3> x= {x} and y = {y} ,sum = {x+y}</h3>
            <h3>Boolean ={view ? "True":"False"}</h3>

            <ol>
                {
                    colors?.map(function (item,index) {
                    return(
                        <li key={index}>{item}</li>
                    )
                })
                }
            </ol>
                <hr/>
            <div>
                <h1>Courses</h1>
                {
                    courses?.map(function(item,index){
                        return(
                            <div key={index}>
                                <p>id:{item.id}</p>
                                <p>title:{item.title}</p>
                                <p>duration:{item.duration}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    courses?.map((item,index)=>{
                        return(
                            <div key={index}>
                                <h4> {item?.title} and duration is {item?.duration}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>

       
    )
    
}
export default Page6
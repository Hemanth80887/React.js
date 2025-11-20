import React from "react";

// global variables
let x=55;
const y = 124.33;
let a ="Boy"
let colors =["red","yellow","blue","orange"]
let isView = true;
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
const Page7  =(props)=>{
    return(
        
           <div>
             <h1>Variables in arrow function component</h1>

            
            <h1>Boolean</h1>
            <h2>Boolean{isView? "True":"False"}</h2>
        <hr/>
            <div>
                <h1>Array</h1>
                {
                    
                    colors?.map((item,index)=>{
                        return(
                            <div key={index}>
                                <p>{item}</p>
                            </div>
                        )

                    })
                }
            </div>
            <hr/>

            <div>
                {
                   courses?.map((item,index)=>{
                    return(
                        <div key={index}>
                            <p>id: {item?.id}</p>
                            <p>title: {item?.title}</p>
                            <p>duration: {item?.duration}</p>
                            <p>I am doing course on {item?.title} which is of {item?.duration}</p>
                        </div>
                    )
                   }) 
                }
            </div>
           </div>

            
        
    )
}
export default Page7
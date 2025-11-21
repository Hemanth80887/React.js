import React, { Component } from "react";

class Products extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{image,title,id,stock,price} = this.props
        return(
            <div className="card">
                <img src={image} alt="no image found"/>
                <h1>{title}</h1>
                <h2>Price={price}</h2>
                <h3>Stack={stock}</h3>
            </div>
        )
    }
}
export default Products
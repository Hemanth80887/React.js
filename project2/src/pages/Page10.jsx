import React, {Component} from "react";
import { products } from "../assets/data";
import Products from '../component/Product'

class Page10 extends Component{
    constructor(props){
        super(props)
    }
    render() {
      return (
        <div>
          <h1>Props in class component</h1>
          <section className="products">
            {
                products?.map((item,index)=>{
                    return(
                        <Products key={index} {...item}/>
                    )
                })
            }
          </section>
        </div>
      )
    }
}
export default Page10
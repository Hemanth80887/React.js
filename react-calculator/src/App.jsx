import React ,{Component}from "react";
import Display from "./component/Display";
import Keypad from "./component/Keypad";

class App extends Component{
  constructor (props){
    super(props)
  }
  render(){
    return(
      <div className="container">
          <div className="row">
              <div className="title">
                <h1>React - Calculator </h1>
              </div>
          </div>

          <section className="calculator">
            <Display/>
            <Keypad/>
          </section>
      </div>
    )
  }

}
export default App
import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

//react functional component

function App(props) {
    return(
        <div>
            <h1>Welcome to react js</h1>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
        </div>
    )
    
}
export default App;
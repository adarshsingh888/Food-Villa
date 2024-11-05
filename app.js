import React from "react"
import ReactDOM from "react-dom"

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiled it to React.createElement-JS  Object => HTNLElement(render)
const Peg=()=>( <p> Itach  Uchiha form Peg Component</p>)

const Jsxheading = () => ( 
    <div>
        <h1 id="heading" className="heading" tabIndex={1}>Jsx heading</h1>
        <Peg/>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Jsxheading/>);
 
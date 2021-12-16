import React from "react";

function Sort({children}){
     let carray = React.Children.toArray(children)
     return <p> {carray.sort().join(' ')} </p>
}

export default Sort;
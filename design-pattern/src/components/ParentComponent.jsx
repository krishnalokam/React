import React from "react";

function H1({children}){
    return <h1>{children}</h1>
}

function ParentComponent(){
    return (
        <H1>Print H1 as h1</H1>
    )
}

export default ParentComponent;
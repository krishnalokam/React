import React from "react";

function Cat({x=0,y=0}) {
    return <h1> {x+y} </h1>
}

function Dog({x=0,y=0}) {
    return <h1> {x*y} </h1>
}

function HigherOrderComponent () {
    return <>
        <Cat />
        <Dog />
    </>

}

export default HigherOrderComponent
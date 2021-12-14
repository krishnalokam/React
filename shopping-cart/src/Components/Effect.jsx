import React, { useEffect, useState } from "react";

const Effect = function() {

    const [height, setHeight] = useState(window.innerHeight);
    const [width,setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        console.log("useEffect was called");
        function handler(){
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize",handler)

        return(()=>{
            console.log("cleanup was called");
            window.removeEventListener("resize",handler)
        })
    })
    return(
        <h1>{height}, {width}</h1>
    )

}

export default Effect;
import React, { useEffect, useState } from "react";
import CustomChild from "./CustomChild";

function useMouseMove(){
    const [x, setX] = useState("");
    const [y, setY] = useState("");

    useEffect(() => {
        function handler(event){
            const {offsetX,offsetY} = event;
            setX(offsetX);
            setY(offsetY);
        }
        window.addEventListener("mousemove",handler);

        return (()=>{
            window.removeEventListener("mousemove",handler)
        })
    },[])
}

function Custom(){
    const [x,y] = useMouseMove()
    return(
        <>
            <h1>{x}, {y}</h1>
            <CustomChild />
        </>
    )

};

export default Custom;
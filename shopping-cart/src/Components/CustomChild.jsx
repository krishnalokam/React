import React,{useState,useEffect} from "react";
import {useMouseMove} from './utils'

function CustomChild(){

    const [x,y] = useMouseMove();

    return (
        <>
            <h1>{Math.round(Math.sqrt(x),2)},{Math.round(Math.sqrt(y),2)}</h1>
        </>
    )

};

export default CustomChild;
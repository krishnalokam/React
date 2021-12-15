import React,{useState,useEffect} from "react";
import {useMouseMove} from './utils'

function CustomChild(){

    const [x,y] = useMouseMove();

    return (
        <>
            <h1>{Math.sqrt(x)},{Math.sqrt(y)}</h1>
        </>
    )

};

export default CustomChild;
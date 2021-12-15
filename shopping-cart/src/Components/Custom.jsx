import React, { useEffect, useState } from "react";
import CustomChild from "./CustomChild";

import {useMouseMove} from './utils'

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
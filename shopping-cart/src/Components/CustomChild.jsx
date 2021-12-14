import React,{useState,useEffect} from "react";

function CustomChild(){
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

    return (
        <>
            <h1>{Math.sqrt(x)},{Math.sqrt(y)}</h1>
        </>
    )

};

export default CustomChild;
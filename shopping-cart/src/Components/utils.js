import {useState,useEffect} from "react";

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
    return [x,y]
}

export {useMouseMove}
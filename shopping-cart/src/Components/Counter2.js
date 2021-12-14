import React,{useEffect, useState} from "react";

function Counter(){
    const [count,setCount] = useState(65);
    const [asciiCode, setAsciiCode] = useState(count);

    useEffect(()=>{
        let interval = setInterval(()=> {
            setCount(count => count+1);
            setAsciiCode(asciiCode => asciiCode+1);        
        },1000);
        return () =>{ clearInterval(interval)}
    },[])
    
    function increment(){
        setCount(count => count+1);
    }

    return <> 
            <h1>{count}</h1>
            <h1>{String.fromCodePoint(asciiCode)}</h1>
            <button onClick={increment}>Increment</button>
           </>            
}

export default Counter;
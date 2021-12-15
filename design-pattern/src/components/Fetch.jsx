import { useEffect, useState} from "react";

function Fetch({url,children}){

    const [data, setData] = useState();
    
    useEffect(() =>{
        async function handler(){
            console.log("handler");
            const res = await fetch(url);
            const data = await res.json();
            console.log("res data"+res);
            console.log("effect data"+data);
            setData(data)    
        }
        console.log("url "+url);
        handler();       
    },[url])

    return children(data)
    
}

export default Fetch;
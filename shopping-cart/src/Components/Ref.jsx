import React,{useRef} from "react"

function Ref(){
    const inputRef = useRef(null);

    function onButtonClick(){
        inputRef.current.focus();
    }
    return(
        <>
            <h1>useRef</h1>
            <input ref={inputRef} type="text" />
            <button onClick={onButtonClick}>Click</button>
        </>
    )
}

export default Ref;
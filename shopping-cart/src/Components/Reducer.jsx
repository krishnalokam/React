import React, { useReducer } from "react";

function counterReducer(state,action){
    console.log("counterReducer");
    switch(action){
        case "INC": return {count: state.count+1};  
        case "DEC": return {count: state.count-1};
        case "RESET": return {count: 0};
        default   : throw new Error();
    }
    
    return state;
}

function Reducer(){
    const [state,dispatch] = useReducer(counterReducer,{count:0});
    return <>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch("INC")  } >INC</button>
        <button onClick={() => dispatch("DEC")  } >DEC</button>
        <button onClick={() => dispatch("RESET")} >RESET</button>
    </>
}

export default Reducer;
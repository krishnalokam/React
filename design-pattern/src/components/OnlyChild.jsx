import React from "react";

function OnlyChild({children}){
    return(
        React.Children.only(children)
    )
}

export default OnlyChild;
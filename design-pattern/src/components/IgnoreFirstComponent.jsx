import React from "react";

function IgnoreFirstComponent({children}){

  return (    React.Children.map(children,(child,i) => {
          if( i<1 ) return
          return child;
      })
  )
  
}

export default IgnoreFirstComponent;
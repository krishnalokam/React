import React from "react";

import Counter from "./Components/Counter2";

// const HelloWord = () => <h1>Hello, Pesto</h1>



// class HelloWorld extends React.Component {
//   render (){
//     const {name} = this.props
//     return <h1>Hello, {name}</h1>
//   }
// }

function App () {
  return <div>
    <Counter count={0} />
    <Counter count={0} />
    <Counter count={0} />
    <Counter count={0} />
  </div>
}

export default App;
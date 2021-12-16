import React from 'react';
import './App.css';
// import ParentComponent from './components/ParentComponent';
// import Executioner from "./components/Executioner"
// import Fetch from './components/Fetch';
// import IgnoreFirstComponent from "./components/IgnoreFirstComponent"
// import Sort from './components/Sort';
// import OnlyChild from "./components/OnlyChild";
// import EditChildren from "./components/EditChildren"

import HOC from "./components/HOC"

function App() {
  let url = "https://api.github.com/users/krishnalokam/repos"
  return (
    <div className="App">
      <HOC />
    </div>
  );
}

export default App;

  /*
   <ParentComponent /> 
       <Executioner>
        {()=> <h1>Hello Executioner</h1>}
      </Executioner> 
       <Fetch url={url}>      
      {(data) => { 
          if(data) {
             return data.map(repo =>  {return <p>{repo.name}</p>})
          } else {
              return <h1>Loading...</h1>
          }
        }
      }
      </Fetch> 
       <IgnoreFirstComponent>
        <h1>IgnoreFirstComponent</h1>
        <h2>hello world</h2>
        <h3>Hello React</h3>
        <h4>Hello Pesto</h4>

      </IgnoreFirstComponent> 
      <Sort>
        {'bananas'} {'oragnes'} {'apples'}
      </Sort> 

       <OnlyChild>
        <h1>Child One</h1>        
      </OnlyChild> 
    <EditChildren />

    */
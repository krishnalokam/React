import './App.css';
// import ParentComponent from './components/ParentComponent';
// import Executioner from "./components/Executioner"
import Fetch from './components/Fetch';

function App() {
  let url = "https://api.github.com/users/krishnalokam/repos"
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <Executioner>
        {()=> <h1>Hello Executioner</h1>}
      </Executioner> */}
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
    </div>
  );
}

export default App;

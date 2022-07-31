import fullBabyData from "./baby-names-data.json"
import { babyData } from "./utils/name-interface";
import '/home/2206-015-mm/Developer/academy/training/react-apps/baby-names-app/src/App.css';
import {sortNamesAlphabetically} from "/home/2206-015-mm/Developer/academy/training/react-apps/baby-names-app/src/utils/sort-alphabetically";

//import { showAllNames } from "./components/showAllNames";

function App(): JSX.Element {
  
  function makeBabyNameElement(oneBaby: babyData) {
    return (
    <>
      {oneBaby.sex === 'm' && (
    <button className = "boyName"> {oneBaby.name}</button>
    )}
      {oneBaby.sex === 'f' && (
        <button className = "girlName"> {oneBaby.name} </button>
      )}
    </>
    );
      }
  return (
    <>
    <body className= "body">
    <p> There are {fullBabyData.length} baby names!</p>
    <div className= "mainList">
      {fullBabyData.map(makeBabyNameElement)}
    </div>
    </body>
    </>
  );
  }

export default App;

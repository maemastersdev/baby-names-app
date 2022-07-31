import { babyData } from "../utils/name-interface";
import fullBabyData from "../baby-names-data.json";
import { sortNamesAlphabetically } from "../utils/sort-alphabetically";

export function DisplayAllNames(): JSX.Element {

    function sortAlphabetically(a: babyData,b: babyData) {
            if (a.name < b.name){
                return -1
            }
            else if (a.name > b.name) {
                return 1;
            }
            else {
                return 0;
            }
        }

    const sortedBabyNameData: babyData[] = [...fullBabyData].sort((a,b) => sortAlphabetically(a, b));
          
    
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
   
    const unsortedBabyData = sortedBabyNameData.map(makeBabyNameElement);

    return (
      <>
      <body className= "body">
      <h1> Baby Name App!</h1>
      <p> There are {fullBabyData.length} baby names!</p>
      <div className= "mainList">
        {unsortedBabyData}
      </div>
      </body>
      </>
    );
    }
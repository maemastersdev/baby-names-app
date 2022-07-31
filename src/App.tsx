import fullBabyData from "./baby-names-data.json"
import { babyData } from "./utils/name-interface";
import {DisplayAllNames} from "/home/2206-015-mm/Developer/academy/training/react-apps/baby-names-app/src/components/mainView";
import '/home/2206-015-mm/Developer/academy/training/react-apps/baby-names-app/src/App.css';
import {sortNamesAlphabetically} from "/home/2206-015-mm/Developer/academy/training/react-apps/baby-names-app/src/utils/sort-alphabetically";

//import { showAllNames } from "./components/showAllNames";

function App(): JSX.Element {
    return (
      <DisplayAllNames />
    );
}

export default App;

import { babyData } from "../utils/name-interface";

export function sortNamesAlphabetically (babyNameData: babyData[]): babyData[] {
    const sortedBabyNameData: babyData[] = [...babyNameData];
    return sortedBabyNameData.sort((a,b) => sortAlphabetically(a, b));
}

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



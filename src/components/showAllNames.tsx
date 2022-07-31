import { babyData } from "../utils/name-interface";

export function showAllNames (baby:babyData): JSX.Element {
    return (
        <>
        <button
            className={baby.sex === "f" ? "female" : "male"}>
            {baby.name}
        </button>
        </>
    );
}

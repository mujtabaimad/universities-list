import { UniversityType } from "../models/university-model";

export function getStatesList(universities?: UniversityType[]) {
    if (universities?.length) {
        return universities.filter((uni) => uni["state-province"]).map((uni) => uni["state-province"] ?? "");
    } else {
        return []
    }
}


function compareUniversities(a: UniversityType, b: UniversityType, reversed: boolean) {

    if ((a?.name ?? "") < (b?.name ?? "")) {
        return reversed ? -1 : 1;
    }
    if ((a?.name ?? "") > (b?.name ?? "")) {
        return reversed ? 1 : -1;
    }
    return 0;
}

export function sortUniversitiesByName(universities?: UniversityType[], sortDirection?: "asc" | "desc" | null) {
    if (universities?.length) {
        return universities.sort((a, b) => compareUniversities(a, b, (sortDirection ?? "asc") === "asc"))
    } else {
        return []
    }
}


export function filterUniversitiesByState(universities?: UniversityType[], state?: string | null) {
    if (universities?.length) {
        if (state) {
            return universities.filter((uni) => uni["state-province"] === state)
        } else {
            return universities
        }
    } else {
        return []
    }
}



export function searchUniversities(universities?: UniversityType[], querey?: string | null) {
    if (universities?.length) {
        if (querey) {
            return universities.filter((uni) => uni.name?.toLowerCase()?.includes(querey.toLowerCase()) )
        } else {
            return universities
        }
    } else {
        return []
    }
}
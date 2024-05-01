import axios from "axios"
import { UniversityType } from "../models/university-model"

export const UNIVERSITIES_API_URL = "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates"
const UNIVERSITIES_LOCALSTORAGE_KEY = "universities"
const DEBUG_MODE_ENABLED = true;

// fetch universities list and save it in local storage and handle if an error occurred
export async function fetchUniversities() {
    return axios.get<UniversityType[]>(UNIVERSITIES_API_URL).then((res) => {

        const data = res.data;
        localStorage.setItem(UNIVERSITIES_LOCALSTORAGE_KEY, JSON.stringify(data))
        return data;

    }).catch((error) => {

        // incase off error while fetching universities: log the error 
        // and check if universities list is available in local storage and if so return it instad
        if (DEBUG_MODE_ENABLED) {
            console.error(error)
        }

        const localStorageUniversities = localStorage.getItem(UNIVERSITIES_LOCALSTORAGE_KEY);
        if (localStorageUniversities) {
            const parsedUniversities:UniversityType[] = JSON.parse(localStorageUniversities);
            return parsedUniversities;
        } else {
            return []
        }
    })
}
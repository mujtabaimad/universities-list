import axios from "axios"
import { UniversityType } from "../models/university-model"

export const UNIVERSITIES_API_URL = "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates"



export function fetchUniversities(){
    return axios.get<UniversityType[]>(UNIVERSITIES_API_URL).then((res)=>{
        const data = res.data;
        return data;
    })
}
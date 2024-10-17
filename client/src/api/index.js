import axios from "axios"

export const TMDB = axios.create({baseURL: "https://api.themoviedb.org/3/"})
export const baseURL = axios.create({baseURL: "http://192.168.1.2:8000"})
// export const baseURL = axios.create({baseURL: "https://movies-mern-app.vercel.app"})
export const API_KEY = ""
export const serverURL = "http://192.168.1.2:8000"
// export const serverURL = "https://movies-mern-app.vercel.app"

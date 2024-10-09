import axios from "axios"

export const TMDB = axios.create({baseURL: "https://api.themoviedb.org/3/"})
export const baseURL = axios.create({baseURL: "http://localhost:8000"})
export const API_KEY = "2d1450a575e2dcacc1d2e19b768fdfdf"
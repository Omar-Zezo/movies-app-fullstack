import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const signup = createAsyncThunk('auth/signup', async(data)=>{
    return await axios.post("http://localhost:8000/api/signup", data)
})
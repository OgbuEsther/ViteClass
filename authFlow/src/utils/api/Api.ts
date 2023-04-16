import axios from "axios";


const url: string = "http://localhost:4000/api";

export const register =async (route:string , data : {}) => {
    try {
        await axios.post(`${url}/${route}` , data).then((res)=>{
            return res
        })
    } catch (error) {
        console.log(error)
    }
}
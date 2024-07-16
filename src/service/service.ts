import http from './config'
import {Request , Response ,News} from "@service-type"
const service = {
    create: (data:Request)=> http.post("/service",data),
    get: ()=> http.get("/service/all", {params: {page: 1, limit:10}}),
    delete: (id:Response)=> http.delete("/service", {params: {id}}),
    update: (data:Request) => http.put("/service", data),
}
export default service;
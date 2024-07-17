import http from './config'
import {Request , Response} from "@order-type"
const order = {
    create: (data:Request)=> http.post("/order",data),
    get: ()=> http.get("/order/all", {params: {page: 1, limit:10}}),
    delete: (id:Response)=> http.delete("/order", {params: {id}}),
    update: (data:Request)=> http.put("/order", data),
}
export default order;
interface Create{
    name: string,
    price: string;
}



export interface Request{
    create: (data:Create)=> unknown
}



interface Delete {
    id:string| number;
}

export interface Response{
    create: (data:Delete)=> unknown
}

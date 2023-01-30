export interface User {
    id:number;
    name:string;
    email:string;
    password:string;
    remember_token?:string;
    createdAt:any;
    updatedAt:any
}
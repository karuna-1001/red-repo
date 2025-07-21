export interface Repo{
    id:number;
    name:string;
    url:string;
    description?:string;
    stars:number;
    language?:string;
    liked?:boolean;
}
export type Tab = "trending"|"liked"
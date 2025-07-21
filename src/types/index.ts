export interface Repo{
    id:number;
    name:string;
    url:string;
    description?:string;
    stars:number;
    language?:string;
}
export type Tab = "trending"|"liked"
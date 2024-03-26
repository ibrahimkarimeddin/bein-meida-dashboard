import { useGetCategory } from "../../api/category"


export const useGetCategorySelectOption = ()=>{
    const {data} = useGetCategory()
    


    return data?.map((cat:ICategory)=>(
        {
            label:cat.name,
            value:cat.id
        }
    ))
}



export type ICategory = {
    id:number 
    name:string 
}
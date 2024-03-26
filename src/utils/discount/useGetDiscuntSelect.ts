import { useGetDiscount } from "../../api/Discount"

export const useGetDiscountSelect  = ()=>{
    const {data} = useGetDiscount()


    return data?.map((dis:IDiscount)=>({
        
        label:dis.type + " --- " + dis.value,
        value:dis.id
    }))
}


export type IDiscount ={
    type:string ,
    value:string ,
    id:string
}
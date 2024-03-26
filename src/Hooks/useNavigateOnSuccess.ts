import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function useNavigateOnSuccess(isSuccess :boolean , to_path:string , callbackAfterSuccess?:any) {
  
    const navigate = useNavigate()
    useEffect(()=>{

        if(isSuccess){
            if (typeof callbackAfterSuccess === 'function') {
                callbackAfterSuccess()
            }
            if(to_path == '/service'){
                
                navigate(-1)

            }else{

                navigate(to_path , {replace:true})
            }
        }
    },[isSuccess])

}

export default useNavigateOnSuccess
import React from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";


interface RowData {
   name:string ,
   phone:string ,
   email:string ,
   id:number 
}

const useTableColumns = () => {
    const navigate = useNavigate()
    const {t} = useTranslation();

    return useMemo(() => {
        const columns = [
             
            {
                name: t("id"),
                sortable: false,
                center: true,
                cell:(row:any)=>{
                    
                    return (row?.id)
                }

            },
            {
                name: t("join_website_date"),
                sortable: false,
                center: true,
                cell:(row:any)=>{
                    
                    return (row?.created_at)
                }

            },
        ];

        return columns;
    }, [t]);
};

export default useTableColumns;

import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const useTableColumns = () => {
    const {t} = useTranslation();

    const navigate  =  useNavigate()
    return useMemo(
        () => [
          
            {
                name: t("join_website_date"),
                sortable: false,
                center: true,
                cell:(row:any)=>{
                    console.log(row);
                    
                    return (row?.created_at)
                }

            },

            {
                name: t("whatsapp_click_date"),
                sortable: true,
                center: true,
                cell:(row)=>row["whatsapp_click_date"]
            }
        ],
        [t]
    );
};

export default useTableColumns;

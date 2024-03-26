import React from 'react'
import DataTable, { TableColumn } from "react-data-table-component";
import { Card, CardBody, CardHeader } from 'reactstrap';
import useTableColumns from './useTableColumn';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../Components/Ui/LoadingButton';
import { useNavigate } from 'react-router-dom';


export default function LastWhatsappClickTable({ data }:any) {
  
  const columns = useTableColumns();
  const {t} = useTranslation();
  const navigate  = useNavigate()
  return (
    <Card>
      <div  className="primary" style={{display:"flex" , justifyContent:"space-between" , padding:"20px", marginTop:"10px"}}>

        {t("latest_user_click_whatsapp")}
     
      </div>

      <CardBody>
        <DataTable
          columns={columns as any}
          data={data}
          noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
          noHeader
        />

      </CardBody>
    </Card>
  )
}

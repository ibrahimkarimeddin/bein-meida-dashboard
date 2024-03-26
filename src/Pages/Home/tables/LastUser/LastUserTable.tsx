import React from 'react'
    import DataTable from 'react-data-table-component';
    import { Card, CardBody, CardHeader } from 'reactstrap';
import useTableColumns from './useTableColumn';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../Components/Ui/LoadingButton';
import { useNavigate } from 'react-router-dom';
    
    export default function LastUserTable({ data }:any) {
      const columns = useTableColumns();
      const {t} = useTranslation();
        

      return (
        <Card>
      <div className='primary' style={{display:"flex" , justifyContent:"space-between" , padding:"20px", marginTop:"10px"}}>
            {t("last_users")}
    
            {/* <LoadingButton color="primary" onClick={() => navigate("/user" , {replace:true})}>
              {t("show_all_users")}
            </LoadingButton> */}
          </div>
          <CardBody>
    
            <DataTable
              columns={columns as any }
       
              data={data}
              noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
              noHeader
            />
          </CardBody>
        </Card>
      )

    
}


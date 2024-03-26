import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { Formik, Form } from "formik";
import { LoadingButton } from "../../Components/Ui/LoadingButton";
import ProgressBar from "../../Components/Ui/ProgressBar";
import { useNavigate } from "react-router-dom";
import { usePageState } from "../../lib/state mangment/LayoutPagestate";
import { useTranslation } from "react-i18next";
import { QueryStatusEnum } from "../../config/QueryStatus";

type TViewPage ={
  children: React.ReactNode,
  getInitialValues:any,
   getValidationSchema:any,
   getDataToSend:any,
   handleSubmit:any,
  //  BarStatus:any,
   showProgressBar?:boolean,
   objectToEdit?:any,
   status?:QueryStatusEnum
}

const ViewPage: React.FC<TViewPage>=  ({children,getInitialValues , status, getValidationSchema,handleSubmit,showProgressBar = true , objectToEdit:data})=> {
    
    const {objectToEdit} = usePageState()
    const {t} = useTranslation();
    const navigate = useNavigate();
  // console.log(BarStatus);

  return (
    <Card className="ViewTapPage">
      <CardHeader  className="CardHeader" >
        <CardTitle className="View_information">
          {t("View_information")}
        </CardTitle>
       <Button onClick={() => { navigate(-1);}}>  {t("back")}  </Button>
      </CardHeader>
      <CardBody>
        {
           <Formik
           onSubmit={handleSubmit}
           initialValues={getInitialValues(data?data:objectToEdit)}
           validationSchema={getValidationSchema()}
        >
          {(formik) => (
            <Form>
              {/* <HeadTabs tabs={tabs} /> */}
                {children}
                {showProgressBar && 
                  <>
                    <div className="d-flex mt-4 justify-content-center align-items-center">
                 
                      <LoadingButton isLoading={status === QueryStatusEnum.LOADING}  type="submit" color="primary">  {t("save")}  </LoadingButton>
                    </div>
                  </>
                }
            </Form>
          )}
        </Formik>
        }
       
      </CardBody>
    </Card>
  );
};


export default ViewPage;

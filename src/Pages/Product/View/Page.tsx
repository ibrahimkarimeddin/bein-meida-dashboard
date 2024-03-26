import React, { useEffect } from 'react'
import { getInitialValues, getValidationSchema, getDataToSend } from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import BasicInfo from './BasicInfo';
import { useParams } from 'react-router-dom';
import LoadingPage from '../../../Layout/app/LoadingPage';
import { useTranslation } from 'react-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import BasicInfo2 from './BasicInfo2';
import useNavigateOnSuccess from '../../../Hooks/useNavigateOnSuccess';
import { useGetOneProduct, useUpdateProducts } from '../../../api/products';
import { QueryStatusEnum } from '../../../config/QueryStatus';
import { usePageState } from '../../../lib/state mangment/LayoutPagestate';

const ViewProduct = () => {

  // get item id from url 
  const { id } = useParams()

  // hook translation
  const { t } = useTranslation();

  // get item from api with all info 
  const { data , isSuccess:SuccessGetProduct } = useGetOneProduct({ id })


  const {objectToEdit,setObjectToEdit} = usePageState()
  const { mutate, isSuccess, status } = useUpdateProducts()

  const handleSubmit = (values: any) => {
    values['id'] = id
    const formToSend = getDataToSend(values)
    mutate(formToSend)
  }

  // if api return success back to item page 
  useNavigateOnSuccess(isSuccess, '/item')



  useEffect(()=>{

    if(SuccessGetProduct){

      setObjectToEdit(data)
    }
  },[SuccessGetProduct , setObjectToEdit , data])
  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit, status: status as QueryStatusEnum };


  return (
    <div className='ViewPage'>
      {data && objectToEdit ?
        <ViewPage {...ViewProps}>
          <Tabs>
            <TabList>
              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><MdLanguage size={20} /></span> <h6 className='SingleDriverInfo'>{t("BasicInfo")}</h6></div></Tab>

              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><BsInfoCircle size={20} /></span> <h6 className='SingleDriverInfo'>{t("BasicInfo2")}</h6></div></Tab>
            </TabList>
            <TabBody >
              <div className=" mt-4"><BasicInfo /></div>
            </TabBody>
            <TabBody >
              <div className=" mt-4"><BasicInfo2 /></div>
            </TabBody>

          </Tabs>
        </ViewPage>
        : <LoadingPage />}


    </div>
  )

}

export default ViewProduct
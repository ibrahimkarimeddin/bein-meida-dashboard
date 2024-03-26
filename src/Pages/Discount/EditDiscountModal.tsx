
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormDiscount from './FormDiscount'
import { getInitialValues, getValidationSchema, InitialValues } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateDiscount } from '../../api/Discount'
import { QueryStatusEnum } from '../../config/QueryStatus'

function EditDiscountModal() {
  const {objectToEdit} = usePageState()

  const {mutate , status} = useUpdateDiscount()
  const handelSubmit = (values:InitialValues)=>{
    
    values['id']= objectToEdit?.id

    mutate(values)
  }
  return ( 
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={handelSubmit}
     status={status as QueryStatusEnum}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormDiscount />
    </LayoutModal>
  )
}

export default EditDiscountModal


import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormCategory from './FormCategory'
import {  getInitialValues, getValidationSchema, InitialValues } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateCategory } from '../../api/category'
import { QueryStatusEnum } from '../../config/QueryStatus'

function EditCategoryModal() {
  // get objectToEdit From column click button
  const {objectToEdit} = usePageState()

  const {mutate , status} = useUpdateCategory()
  const handelSubmit = (values:InitialValues )=>{    
    values['parent_id']   = values['category_id'] 
    values['id']=  objectToEdit.id


    mutate(values)
    // Submit Value
  }
  return (
    <LayoutModal 
    status={status as QueryStatusEnum}
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={handelSubmit}
     headerText='edit' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormCategory />
    </LayoutModal>
  )
}

export default EditCategoryModal

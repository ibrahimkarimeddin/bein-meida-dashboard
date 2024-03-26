

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormCategory from './FormCategory'
import { useAddCategory } from '../../api/category'
import { getInitialValues, getValidationSchema, InitialValues } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddCategoryModal() {



  const [t] = useTranslation()

  const { mutate, status } = useAddCategory()
  const handelSubmit = (values: InitialValues) => {
    
    values['parent_id'] = values['category_id']
    // Submit Value
    mutate(values)
  }
  return (
    <LayoutModal
      isAddModal={true}
      getInitialValues={getInitialValues()}
      handleSubmit={handelSubmit}
      status={status as QueryStatusEnum}
      headerText={t('Add') + t('Category')}
      getValidationSchema={getValidationSchema()}>
      <FormCategory />
    </LayoutModal>
  )
}

export default AddCategoryModal


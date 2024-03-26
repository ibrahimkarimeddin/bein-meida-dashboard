

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormDiscount from './FormDiscount'
import { useAddDiscount } from '../../api/Discount'
import { getInitialValues, getValidationSchema, InitialValues } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddDiscountModal() {


  const [t] = useTranslation()
  const { mutate, status } = useAddDiscount()

  const handelSubmit = (values: InitialValues) => {
    mutate(values)

  }
  return (
    <LayoutModal
      isAddModal={true}
      getInitialValues={getInitialValues()}
      handleSubmit={handelSubmit}
      status={status as QueryStatusEnum}
      headerText={t('Add') + t('Discount')}
      getValidationSchema={getValidationSchema()}>
      <FormDiscount />
    </LayoutModal>
  )
}

export default AddDiscountModal


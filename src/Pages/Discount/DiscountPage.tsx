
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetDiscount} from '../../api/Discount'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditDiscountModal from './EditDiscountModal'
import AddDiscountModal from './AddDiscountModal'

function DiscountPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetDiscount()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Discount'}></DashHeader>
      <LyTable
        data={data}
        isLoading={status === QueryStatusEnum.LOADING}
        columns={column}
      />
      
      <EditDiscountModal />
      <AddDiscountModal />
      
    </DashBody>
  )
}

export default DiscountPage


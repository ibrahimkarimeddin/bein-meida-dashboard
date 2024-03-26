
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useNavigate } from 'react-router-dom'
import AddButton from '../../Layout/Dashboard/AddButton/AddButton'
import { useGetProducts } from '../../api/products'

function ProductsPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetProducts()
    const navigate = useNavigate()
    

  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'Item'}>
        <AddButton  onClick={()=>navigate('/item/add')}></AddButton>
      </DashHeader>
      
      <LyTable
        data={data?.data}
        isLoading={status === QueryStatusEnum.LOADING}
        columns={column}
        is_pagination={true}
        total={data?.pagination?.total}
    />

    </DashBody>
  )
}

export default ProductsPage


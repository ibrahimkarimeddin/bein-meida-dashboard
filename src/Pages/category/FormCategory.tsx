
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../Components/ValidationField/ValidationField';
import { useGetCategoryLevel } from '../../utils/category/useGetCategoryLevel';
import { useGetCategorySelectOption } from '../../utils/category/useGetCategorySelectOption';
import { useGetDiscountSelect } from '../../utils/discount/useGetDiscuntSelect';

function FormCategory() {

  const CategoryLevelSelect = useGetCategoryLevel()
  const DiscountSelect = useGetDiscountSelect()

  const CategorySelecct = useGetCategorySelectOption();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <ValidationField name="name" type="text" label='name' placeholder='name' />
        <ValidationField name="category_id" type="Select" label='parent' placeholder='parent' option={CategorySelecct} />

      </Col>
      <Col>
        <ValidationField name="level" type="Select" label='level' placeholder='level' option={CategoryLevelSelect} />
        <ValidationField name="discount_id" type="Select" label='discount' placeholder='discount' option={DiscountSelect} />

      </Col>


    </Row>
  )
}

export default FormCategory



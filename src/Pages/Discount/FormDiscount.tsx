
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../Components/ValidationField/ValidationField';
import { useGetDiscountType } from '../../utils/discount/useGetDiscountType';



function FormDiscount() {


  const selectType = useGetDiscountType()


  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <ValidationField name="type" type="Select" option={selectType} label='type' placeholder='type' />
      </Col>
      <Col>
        <ValidationField name="value" type="text" label='value' placeholder='value' />
      </Col>
    </Row>
  )
}

export default FormDiscount



import React from 'react'
import { Col, Row } from 'reactstrap'
import ValidationField from '../../../Components/ValidationField/ValidationField'
import { useTranslation } from 'react-i18next';
import { useGetCategory } from '../../../api/category';
import { useGetCategorySelectOption } from '../../../utils/category/useGetCategorySelectOption';
import { useGetDiscountSelect } from '../../../utils/discount/useGetDiscuntSelect';

const BasicInfo2 = () => {
  const [t] = useTranslation();

  const categoryOption = useGetCategorySelectOption() 
  const discountOption = useGetDiscountSelect() 



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>

        <ValidationField
          type='Select'
          option={categoryOption}
          name="category_id"
          label={`${t("category")}`}
          placeholder={`${t("category")}`}
        />
      
      <ValidationField
          type='Select'
          option={discountOption}
          name="discount_id"
          label={`${t("discount")}`}
          placeholder={`${t("discount")}`}
        />
      
      </Col>
      <Col>
        <ValidationField
          name="price"
          label={t("price")}
          placeholder={t("price")}
          type="number"

        />
    

      </Col>


    </Row>
  )
}

export default BasicInfo2
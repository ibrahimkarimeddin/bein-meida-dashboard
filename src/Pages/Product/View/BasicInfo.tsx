import React from 'react'
import { Col, Row } from 'reactstrap'
import ValidationField from '../../../Components/ValidationField/ValidationField'
import { useTranslation } from 'react-i18next';

const BasicInfo = () => {
  const [t] = useTranslation();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
    <ValidationField
          name="name"
          label={t("name")}
          placeholder={t('name')}
        />
 
         
      </Col>
      <Col>
      

      <ValidationField
          dir="rtl"
          name="description"
          label={`${t("description")}`}
          placeholder={`${t("description")}`}
        />
        
    </Col>


    </Row>
  )
}

export default BasicInfo
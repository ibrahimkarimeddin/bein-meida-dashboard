import { Form, Input } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const Default = ({ name, label, placeholder, isDisabled, onChange, props,type , label2 }: any) => {
  const { Field, formik, isError, errorMsg, t } = useFormField(name, props);

  const last_name = label2 ? t(label) +" " + t(label2) :t(`${label ?  label: name}`)
  return (
    <div className="ValidationField w-100" >
      <label htmlFor={name} className="text">
        {
          last_name
        }
        
        </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? 'error' : ''}
        help={isError ? errorMsg : ''}
      >
        <Field
          as={Input}
          type={type ?? "text"}
          placeholder={t(`${placeholder ?placeholder  : last_name}`)}
          name={name}
          disabled={isDisabled}
          size="large" 
          
        //  onChange={onChange ? onChange : handleChange}
        />
      </Form.Item>
    </div>
  );
};

export default  React.memo(Default);
;

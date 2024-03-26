import { Button, Upload, UploadFile } from 'antd'
import useFormField from '../../../Hooks/useFormField';
import { UploadOutlined } from '@ant-design/icons';
import {  ImageBaseURL } from '../../../api/config';
import { useTranslation } from 'react-i18next';


const File = ({ name, label, onChange, isDisabled,placholder,className, props , label2 }: any) => {
  const { formik, t ,isError} = useFormField(name, props)
  let FormikName = formik.values[name];
  const imageUrl = formik.values[name] ? ImageBaseURL + FormikName :  '';
  

  const last_name = label2 ? t(label) +" " + t(label2) :t(`${label ?  label: name}`)

  const fileList: UploadFile[] = [

    {
      uid: '-1',
      name: '',
      status: 'done',
      url: FormikName == ""? imageUrl : imageUrl?.replace("public", "/storage"),
      thumbUrl: FormikName == ""? imageUrl : imageUrl?.replace("public", "/storage")
    }
  ];
  const FilehandleChange = (value:any) => {
    
    formik.setFieldValue(name, value.file.originFileObj)

  };
  const customRequest = async ({ onSuccess}: any) => {
    onSuccess();
  };
  return (
    <div className="ValidationField">
      <label htmlFor={name} className="text">
        {t(`${last_name}`)}
      </label>

      <Upload
        disabled={isDisabled}
        listType="picture"
        maxCount={1}
        defaultFileList={[...fileList]}
        onChange={onChange || FilehandleChange}
        customRequest={customRequest}
        className={`${className} w-100`}
        
        
       

      >
        <Button className={isError ? "isError w-100" : " w-100"} icon={<UploadOutlined  />}>
          {placholder ?? t("upload_image") }
         
          </Button>
       <div className='Error_color'> {isError ? "required" : ""}</div>
      </Upload>



    </div>
  )
}

export default File
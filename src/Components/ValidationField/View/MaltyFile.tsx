import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ImageBaseURL } from '../../../api/config';
import { useTranslation } from 'react-i18next';
import useFormField from '../../../Hooks/useFormField';

const MaltyFile = ({ name, label, onChange, isDisabled, placholder, className, props }: any) => {
  const { formik, t, isError } = useFormField(name, props);
  const imageUrl = formik?.values[name] ? ImageBaseURL + formik.values[name] : '';
  const fileList = formik?.values[name] ? formik?.values[name]?.map((file: any, index: number) => ({
    uid: index,
    name: file.name,
    status: 'done',
    url: file.url || '',
    thumbUrl: file.url || '',
  })) : [];
  
  const FilehandleChange = ({ file, fileList }: any) => {
    formik.setFieldValue(name, fileList.map((file: any) => file.originFileObj));
  };

  const customRequest = async ({ onSuccess }: any) => {
    // Perform any necessary actions before onSuccess is called
    onSuccess();
  };

  return (
    <div className="ValidationField">
      <label htmlFor={name} className="text">
        {t(`${label || name}`)}
      </label>

      <Upload
        disabled={isDisabled}
        listType="picture"
        defaultFileList={[...fileList]}
        onChange={onChange || FilehandleChange}
        customRequest={customRequest}
        className={`${className} w-100`}
        multiple // Allow multiple files to be selected
        
      >
        <Button className={isError ? "isError w-100" : " w-100"} icon={<UploadOutlined />}>
          {placholder ?? t("upload_image")}
        </Button>
        <div className='Error_color'> {isError ? "required" : ""}</div>
      </Upload>
    </div>
  );
};

export default MaltyFile;

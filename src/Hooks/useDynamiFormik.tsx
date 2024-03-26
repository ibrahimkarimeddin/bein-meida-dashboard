import * as Yup from 'yup';

export const usegetInitialValues = (fields: string[], objectToEdit?: any): any => {
  const initialValues: any = {};
  fields.forEach((field: string) => {
    initialValues[field] = objectToEdit?.[field] ?? '';
  });
  return initialValues;
};

export const usegetValidationSchema = (fields: string[]): Yup.Schema<any> => {
  const schema: { [key: string]: Yup.StringSchema<string> } = {};
  fields.forEach((field: string) => {
    schema[field] = Yup.string().required('Required');
  });
  return Yup.object().shape(schema);
};

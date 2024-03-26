
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";



export const getInitialValues = (objectToEdit: any | null = null) => {
 
  // console.log(objectToEdit);
  
  return {
    price:objectToEdit?.price??0,
    description:objectToEdit?.description,
    name:objectToEdit?.name,
    category_id:objectToEdit?.category_id ?? null,
    discount_id:objectToEdit?.discount_id ?? null,


  }
};

export const getValidationSchema = (editMode: boolean = false) => {
    // validate input  
    
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  // console.log(data);

  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};


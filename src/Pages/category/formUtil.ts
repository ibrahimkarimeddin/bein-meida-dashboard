
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";

interface formUtilCommon {
  
 
}

interface ObjectToEdit extends formUtilCommon {

  id:number,
  name:string,
  parent_id :number,
  level : string,
  discount_id:number

}

export interface InitialValues  {
  
  id:number,
  name?:string,
  parent_id? :number,
  level?: string,
  discount_id?:number,
  category_id?:number

}
interface ValidateSchema  {
 name:string,
 level:string

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 
  
  return {
    
  id:objectToEdit?.id ?? 0,
  name:objectToEdit?.name ?? "",
  parent_id :objectToEdit?.parent_id ,
  category_id :objectToEdit?.parent_id ,
  level : objectToEdit?.level,
  discount_id:objectToEdit?.discount_id
  };
  


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
 return Yup.object().shape({
    name:Yup.string().required(),
    level:Yup.string().required()
  });
};



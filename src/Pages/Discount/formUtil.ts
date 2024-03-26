
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  type:string,
  value:string 
}

interface ObjectToEdit extends formUtilCommon {

    id?:number,

}

export interface InitialValues extends ObjectToEdit {

}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 

  return {
    id:objectToEdit?.id?? 0 ,
    type:objectToEdit?.type ?? "",
    value:objectToEdit?.value?? ""
  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    type:Yup.string().required(),
    value:Yup.string().required()

  });
};



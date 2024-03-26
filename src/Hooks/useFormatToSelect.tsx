import { convert_language_array_to_local } from "../utils/language/ConvertObjectToLocalLanguage";

const useFormatToSelect = (Data : any,label?:string) => {
    const format = (data :any) => {
      if (!data) return [];
      console.log(data);
      
      return data.map((item :any) => {
        console.log(item?.translations);
        return (
          ({
            value: item?.id,
            label:  convert_language_array_to_local(item?.translations, label ?? "name"),
          })
        )
      }
      
      );
    };
  
    return format(Data);
  };
  
  export default useFormatToSelect;
  
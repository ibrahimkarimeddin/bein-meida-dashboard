import { useQueryClient, useMutation, UseMutationResult } from "react-query";
import { toast } from "react-toastify";
import useAxios  from "./useAxios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

type AxiosResponse = {
  message: string;
  // Add other properties as needed
};

const useUpdateMutationById = (
  key: string,
  url: string,
  toastMessage: boolean = false,
  method?:string
): UseMutationResult<AxiosResponse, unknown, unknown> => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const [t] = useTranslation();

  return useMutation<AxiosResponse, unknown, unknown>(
    async (dataToSend:any) => {
      if(method === "put"){
        const { data } = await axios.put(url+"/"+dataToSend?.id, dataToSend );
        return data;
      }else{
        const { data } = await axios.post(url+"/"+dataToSend?.id, dataToSend,{
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        });
        return data;
      }

      
     
    },
    {
      onSuccess: (data) => {
        if (toastMessage) {
          toast.success(data.message || t("updated_successfully"));
        }
        queryClient.invalidateQueries([key]);
      },
      onError: (err:any) => {
        const message = err?.response?.data?.message || t("failed_to_update_data");
        toast.error(message);


        // validateSession(err.response);
      },
    }
  );
};

export default useUpdateMutationById;

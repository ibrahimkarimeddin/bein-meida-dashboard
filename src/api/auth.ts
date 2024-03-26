import useAddMutation from "./helper/useAddMutation";




const KEY = "AUTH"
const API = {
    LOGIN: `auth`,
  };
export const useLoginAdmin  =  ()=>useAddMutation(KEY , API.LOGIN)
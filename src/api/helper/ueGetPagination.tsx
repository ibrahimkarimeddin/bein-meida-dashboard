import { useQuery } from 'react-query';
import useAxios from './useAxios';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthState from '../../lib/state mangment/AuthState';

export default function useGetQueryPagination(KEY:string  , Api: string , params:any={},options:any={}) {
  const axios = useAxios();
  const location = useLocation();
  const pagination = location?.search || '';
const {logout} = useAuthState()
const language = localStorage.getItem("language") ?? "en"
const navigate = useNavigate()

  return useQuery(
    [KEY, pagination], async () => {
    const response = await axios.get(Api + pagination , {params});
    return response?.data?.data; 
  },
  {
    onError: (error:any) => {
      if(error.response.status == 401 || error.response.status == 403){
          logout()
          navigate("/auth")

      }
      
    },
    refetchOnWindowFocus: false,
    
    ...options

  }
  );
}

// export const useGetDynamic = (Api: string) => useGetQueryPagination(Api);

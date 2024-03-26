import { useQuery } from 'react-query';
import useAxios from './useAxios';
import useAuthState from '../../lib/state mangment/AuthState';
import { useNavigate } from 'react-router-dom';

function useGetQuery(key: string, url: string , params:any={},options:any={}) {
  const axios = useAxios();
  const {logout} = useAuthState()
  const navigate = useNavigate()
  return useQuery(
    params ? [key, params] : key,
     async () => {
    const response = await axios.get(url , {params});
    return response.data.data; 
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

export default useGetQuery;

import { useQuery } from 'react-query';
import useAxios from './useAxios';
import useAuthState from '../../lib/state mangment/AuthState';
import { useNavigate, useParams } from 'react-router-dom';

function useGetSingleQuery(key: string, url: string , params:any={},options:any={}) {
  const axios = useAxios();
  const {logout} = useAuthState()
  const language = localStorage.getItem("language") ?? "en"
  const navigate = useNavigate()
  const {id} = useParams()

  return useQuery(
    [id, key,params?.id],
     async () => {
    const response = await axios.get(url+"?"+params?.name+"="+params?.id+`?lang=${language}`);
    return response.data; 
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

export default useGetSingleQuery;

import useGetQuery from "./helper/useGetQuery"

  const API = {
    GET: "/home",

  };

  const KEY = "HOME";
  export const useGetHome = (params?:any) => useGetQuery(KEY, API.GET, params, {
    cacheTime:0,
    staleTime:0
  });


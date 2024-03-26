
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
import { useUploadWithProgress } from "./helper/useUploadWithProgress";

  const API = {
    GET: "/item/getAll",
    GETONE: "/item/getOne",

    ADD: "/item/add",
    UPDATE: "/item/update",
    DELETE: "/item/delete",
  };

  const KEY = "PRODUCTS";
  export const useGetProducts = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useGetOneProduct = (params?:any) => useGetQuery(KEY, API.GETONE, params);

  export const useAddProducts = () => useAddMutation(KEY, API.ADD);
  
  export const useUpdateProducts = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteProducts = () =>useDeleteMutation(KEY, API.DELETE);

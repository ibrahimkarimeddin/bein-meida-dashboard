
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/discount/getAll",
    ADD: "/discount/add",
    UPDATE: "/discount/update",
    DELETE: "/discount/delete",
  };

  const KEY = "DISCOUNT";
  export const useGetDiscount = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddDiscount = () => useAddMutation(KEY, API.ADD);
  export const useUpdateDiscount = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteDiscount = () =>useDeleteMutation(KEY, API.DELETE);

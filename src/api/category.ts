
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/category/getAll",
    ADD: "/category/add",
    UPDATE: "/category/update",
    DELETE: "/category/delete",
  };

  const KEY = "CATEGORY";
  export const useGetCategory = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddCategory = () => useAddMutation(KEY, API.ADD);
  export const useUpdateCategory = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteCategory = () =>useDeleteMutation(KEY, API.DELETE);

  export const useUpdateCategoryStatus =()=>useUpdateMutation(KEY, API.UPDATE);
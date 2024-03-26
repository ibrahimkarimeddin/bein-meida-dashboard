
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { useNavigate } from "react-router-dom";
import { useDeleteProducts } from "../../api/products";


const useTableColumns  = () => {

  const [t] = useTranslation();
  const deleteMutation = useDeleteProducts();
  const navigate  = useNavigate()

  return useMemo(
    () => [

      {
        name: `${t("name")}`,
        sortable: false,
        center: true,
        cell: (row:any) =>
          row.name,
      },
      {
        name: t("category"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          row?.category?.name
        ),
      },
      {
        name: t("price"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          row?.price
        ),
      },
      {
        name: t("price_after_discount"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          row?.price_after_discount
        ),
      },
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row:any) => (
            <Actions
              onView={()=> navigate('/item/'+row.id)}
              objectToEdit={row}
              showEdit={false}
              showView={true}
              onDelete={() => deleteMutation.mutate({ product_id: row.id })}
              />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;


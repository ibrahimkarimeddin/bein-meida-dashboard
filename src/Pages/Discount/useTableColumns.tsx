
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { useDeleteDiscount } from "../../api/Discount";


const useTableColumns :any = () => {
  const [t] = useTranslation();
  const {mutate }=  useDeleteDiscount()

  return useMemo(
    () => [
      {
        name: t("type"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.type
      },
     
      {
        name: t("value"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.value
      },
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions           
              objectToEdit={row}
              showEdit={true}
              showView={false}
              onDelete={() => mutate({ id: row.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;


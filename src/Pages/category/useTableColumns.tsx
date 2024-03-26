
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { BaseURL, ImageBaseURL } from "../../api/config";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { useDeleteCategory, useUpdateCategoryStatus } from "../../api/category";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();


  const toggleMutation  = useUpdateCategoryStatus()
  const deleteMutation = useDeleteCategory()

  return useMemo(
   
    () => [

      {
        name: `${t("name")}`,
        sortable: false,
        center: true,
        cell: (row:any) =>row?.name,
      },
    
    
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <Actions
            objectToEdit={row}
            showView={false}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
        ),
      },
    ],
    [t, deleteMutation, toggleMutation]
  );
};

export default useTableColumns;


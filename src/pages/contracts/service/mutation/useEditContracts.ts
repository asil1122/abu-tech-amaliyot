import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fileType } from "../../../../components/modal/modal-types";
import { request } from "../../../../config/request";


export const useEditContracts = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: fileType }) =>
            request
                .put(`/api/staff/contracts/${id}`, data)
                .then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["contract"] });
        },
    });
};

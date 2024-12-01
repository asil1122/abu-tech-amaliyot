import { useMutation } from "@tanstack/react-query";
import { LoginType } from "../../loginTaype";
import { request } from "../../../../config/request";

interface tokenType {
  data: {
    accessToken: string;
    refreshToken: string;
    staffInfo: {
      id: number;
      photo: string;
      user: { id: number; userType: number; status: number };
      firstName: string;
      lastName: string;
    };
  };
  error: null;
  success: boolean;
}


export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginType) =>
      request
        .post<tokenType>("/api/staff/auth/sign-in", data)
        .then((res) => res.data),
  });
};

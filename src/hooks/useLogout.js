import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "Services/authApi";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
  });

  return { logout, isPending };
}

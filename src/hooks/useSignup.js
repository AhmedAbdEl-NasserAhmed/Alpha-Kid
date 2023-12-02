import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../services/authApi";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log("user", user);
      toast.success(
        "Account successfully created please verify the new account from the user's email address."
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isPending };
}

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup } from "../../services/apiAuth";

function useSignup() {
  const { mutate: handleSignup } = useMutation({
    mutationFn: ({ data }) => {
      const { email, password, confirmPassword } = data;

      if (!email || !password || !confirmPassword)
        throw new Error("There are some empty fields.");
      if (password !== confirmPassword)
        throw new Error("Passwords are not equal");

      return signup({ email, password });
    },

    onSuccess: () => {
      toast.success("New account created");
    },

    onError: (error) => {
      toast.error(error.message);
    },

    onSettled: (_, __, { reset }) => {
      reset();
    },
  });

  return { handleSignup };
}

export { useSignup };

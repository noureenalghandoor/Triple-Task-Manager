import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.auth.login)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.auth.login)["$post"]>;

export const useLogin = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.login["$post"]({ json });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("You have been logged in");
    },
    onError: () => {
      toast.error("Failed to log in");
    },
  });

  return mutation;
};

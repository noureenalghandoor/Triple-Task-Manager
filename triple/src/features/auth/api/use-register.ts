import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.auth.register)["$post"]
>;
type RequestType = InferRequestType<(typeof client.api.auth.register)["$post"]>;

export const useRegister = () => {
  const router = useRouter();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.register["$post"]({ json });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Your account has been registered successfully");
      router.refresh();
    },
    onError: () => {
      toast.error("Failed to register your account");
    },
  });

  return mutation;
};

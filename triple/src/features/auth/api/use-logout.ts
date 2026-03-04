"use client";

import { InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const res = await client.api.auth.logout.$post();

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      return await res.json();
    },
    onSuccess: () => {
      queryClient.setQueryData(["current"], null);
      queryClient.removeQueries({ queryKey: ["current"] });

      toast.success("You have been logged out");

      router.push("/sign-in");
      router.refresh();
    },
    onError: () => {
      toast.error("Failed to log out");
    },
  });
};

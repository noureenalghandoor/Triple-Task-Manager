import React from "react";
import SignInCard from "@/features/auth/components/SignInCard";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrent();

  if (user) {
    redirect("/");
  }

  return (
    <div>
      <SignInCard />
    </div>
  );
};
export default Page;

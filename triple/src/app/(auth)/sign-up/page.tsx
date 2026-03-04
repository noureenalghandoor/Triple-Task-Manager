import React from "react";
import SignUpCard from "@/features/auth/components/SignUpCard";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrent();

  if (user) {
    redirect("/");
  }

  return (
    <div>
      <SignUpCard />
    </div>
  );
};
export default Page;

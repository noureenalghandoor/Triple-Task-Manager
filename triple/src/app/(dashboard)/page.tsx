import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import CreateWorkspaceForm from "@/features/workspaces/componenets/CreateWorkspaceForm";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>
      <CreateWorkspaceForm />
    </div>
  );
}

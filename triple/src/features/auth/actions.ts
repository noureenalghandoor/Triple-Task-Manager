"use server";

import { Account, Client } from "node-appwrite";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/features/auth/constants";

export const getCurrent = async () => {
  try {
    const session = (await cookies()).get(AUTH_COOKIE);
    if (!session?.value) return null;
    console.log("cookie?", !!session, "len:", session?.value?.length);

    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
      .setSession(session.value);

    const account = new Account(client);
    return await account.get();
  } catch (e) {
    console.log("getCurrent error:", e);
    return null;
  }
};

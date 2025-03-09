"use server";

import { signIn, signOut } from "next-auth/react";

export async function handleGoogleLogin() {
  await signIn("google");
}

export async function hangleSignOut() {
  await signOut();
}

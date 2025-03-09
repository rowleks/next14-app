"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className=" rounded-md p-4.5 text-primary-soft font-bold bg-txt cursor-pointer"
      type="button"
      onClick={async () =>
        await signIn("google", { prompt: "select_account", forceRefresh: true })
      }
    >
      Login with Google
    </button>
  );
}

import { loginUser } from "@/app/actions/authActions";
import Link from "next/link";
// import LoginBtn from "../login-btn/LoginBtn";

export default function LoginForm() {
  return (
    <div className="p-8 md:p-12 bg-primary-soft w-[500px]">
      <form className="w-full flex flex-col gap-8 text-sm" action={loginUser}>
        {/* <LoginBtn /> */}

        <label htmlFor="username">
          <input
            className="bg-primary p-4.5 rounded-md w-full "
            type="email"
            placeholder="email"
            id="email"
            name="email"
          />
        </label>

        <label htmlFor="password">
          <input
            className="bg-primary p-4.5 rounded-md w-full "
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </label>

        <button
          className="p-4.5 font-bold bg-txt-btn rounded-md  text-txt cursor-pointer"
          type="submit"
        >
          Login
        </button>

        <span className="text-center text-[1rem]">
          Don&#39;t have an account?{" "}
          <Link className="font-bold" href="/register">
            Register
          </Link>{" "}
        </span>
      </form>
    </div>
  );
}

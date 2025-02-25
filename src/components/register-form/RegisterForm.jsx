import Link from "next/link";

export default function LoginForm() {
return (
    <div className="p-8 md:p-12 bg-primary-soft w-[500px]">
        <form className="w-full flex flex-col gap-8 text-sm">
            <label htmlFor="username">
            <input className="bg-primary p-4.5 rounded-md w-full" type="text" placeholder="Username" id="username" name="username" />
            </label>

            <label htmlFor="email">
            <input className="bg-primary p-4.5 rounded-md w-full" type="email" placeholder="Email" id="email" name="email" />
            </label>

            <label htmlFor="password">
            <input className="bg-primary p-4.5 rounded-md w-full" type="password" placeholder="Password" id="password" name="password" />
            </label>

            <label htmlFor="password">
            <input className="bg-primary p-4.5 rounded-md w-full" type="password" placeholder="Password again" id="password" name="confirm-password" />
            </label>

            <button className="p-4.5 font-bold bg-txt-btn rounded-md  text-txt cursor-pointer" type="submit">Register</button>
            
            <span className="text-center text-[1rem]">Have an account? <Link className="font-bold" href="/login">Login</Link> </span>
        </form>
    </div>
);
}
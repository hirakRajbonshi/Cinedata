import Link from "next/link";

export default function Page() {
  return (
    <section className="flex flex-col h-[93vh] items-center justify-center">
      <form className="flex flex-col gap-4" action="">
        <label className="input-group">
          <span>Username: </span>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="input-group">
          <span>Email: </span>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="input-group">
          <span>Password: </span>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn btn-primary">Subscribe</button>{" "}
      </form>
      <p className="mt-2 mb-[5rem]">
        Don't have an account{" "}
        <Link href="/auth/signin" className="link link-primary">
          Signin
        </Link>
      </p>
    </section>
  );
}

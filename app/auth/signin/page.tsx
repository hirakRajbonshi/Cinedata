"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function Page() {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password != confPassword) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    // console.log(formData);
    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   body: formData,
    // });

    // Handle response if necessary
    // const data = await response.json();
    // ...
  }

  return (
    <section className="flex flex-col h-[93vh] items-center justify-center">
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <label className="input-group">
          <span>Username: </span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="input-group">
          <span>Email: </span>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="input-group">
          <span>Password: </span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span>Confirm Password: </span>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confPassword}
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Subscribe
        </button>{" "}
      </form>
      <p className="mt-2 mb-[5rem]">
        Have an account{" "}
        <Link href="/auth/login" className="link link-primary">
          Login
        </Link>
      </p>
    </section>
  );
}

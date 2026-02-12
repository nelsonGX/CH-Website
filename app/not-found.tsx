"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
    <h1>404!!!</h1>
    {router.push("https://http.cat/404")}
    </>
  );
}
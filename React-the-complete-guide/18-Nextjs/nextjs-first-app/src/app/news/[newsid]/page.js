"use client";
import { useRouter } from "next/navigation";

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  console.log(router.query);

  http: return <h1>The Detail Page</h1>;
}

export default DetailPage;

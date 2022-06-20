import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1> Page not found</h1>
      <p>
        Bo back to <Link href="/"> Homepage</Link>
      </p>
    </div>
  );
};
export default NotFound;

import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <img
        width="100%"
        src="https://colibriwp.com/blog/wp-content/uploads/2019/07/2488756.jpg"
      ></img>
    </div>
  );
};

export default ErrorPage;

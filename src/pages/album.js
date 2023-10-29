import Image from "next/image";
import React from "react";

const Album = () => {
  return (
    <div>
      <h1>This image is using img tag</h1>
      <img
        width="100%"
        src="https://th.bing.com/th/id/OIP.KLv8KFiUKd4HY4lTD5UVhgHaC-?w=274&h=180&c=7&r=0&o=5&pid=1.7"
        alt=""
      ></img>
      <h1>This image is using image tag</h1>
      <Image
        width={500}
        height={500}
        layout="responsive"
        src="https://th.bing.com/th/id/OIP.KLv8KFiUKd4HY4lTD5UVhgHaC-?w=274&h=180&c=7&r=0&o=5&pid=1.7"
        alt=""
      ></Image>
    </div>
  );
};

export default Album;

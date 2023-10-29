import { useRouter } from "next/router";
import React from "react";

const ProductDetailPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is dynamic product page: {router.query.productId}</h1>
    </div>
  );
};

export default ProductDetailPage;

import React from "react";
import { useState } from "react";
import {
  ProductCard,
  Product,
  MyModal,
} from "@/components/index";

import products from "products";

React.useLayoutEffect = React.useEffect;

export default function Home() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-semibold mb-4">Drinks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            disabled={disabled}
            onClickAdd={() => setDisabled(true)}
            onAddEnded={() => setDisabled(false)}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}

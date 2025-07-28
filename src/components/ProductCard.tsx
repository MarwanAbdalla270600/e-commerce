"use client";

import { Product } from "@/data/product";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl w-full overflow-hidden border border-white/10 bg-black/20 shadow-md hover:shadow-lg transition duration-300 p-4">
      <div className="relative w-full aspect-[1/1] rounded-lg overflow-hidden bg-black">
        <img
          src={
            product.image ||
            "https://blocks.astratic.com/img/general-img-landscape.png"
          }
          
          alt={product.title}
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-between mt-3 px-1">
        <p className="text-sm text-white">{product.title}</p>
        <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
          ${product.price.toFixed(2)} USD
        </span>
      </div>
    </div>
  );
}

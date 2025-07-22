"use client";
import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { ShoppingCart as Cart } from "lucide-react";
export default function ShoppingCart() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setOpen(true)}
          className="border p-3 rounded-md cursor-pointer"
        >
          <Cart className="size-4"></Cart>
        </button>
      )}
    </>
  );
}

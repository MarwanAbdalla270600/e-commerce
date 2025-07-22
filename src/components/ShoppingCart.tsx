"use client";
import { ShoppingBasket, X } from "lucide-react";
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

      {isOpen && (
        <>
          <button className="border p-3 rounded-md cursor-pointer">
            <Cart className="size-4"></Cart>
          </button>{" "}
          <div className="absolute w-full top-0 right-0 h-screen md:w-96 bg-black py-8 px-4">
            <div className="flex justify-between items-center">
              <h2>My Cart</h2>
              <button
                onClick={() => setOpen(false)}
                className="border p-3 rounded-md cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

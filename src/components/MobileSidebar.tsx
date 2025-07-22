"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SearchInput from "./SearchInput";

export default function MobileSidebar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setOpen(true)}
          className="border p-3 rounded-md cursor-pointer"
        >
          <Menu className="size-4" />
        </button>
      )}

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-start gap-4 bg-black py-8 px-4">
          <button
            onClick={() => setOpen(false)}
            className="border p-2 rounded-md cursor-pointer"
          >
            <X className="size-4" />
          </button>
          <SearchInput/>
        </div>
      )}
    </>
  );
}

"use client";
import { Search } from "lucide-react";
export default function SearchInput() {

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchQuery = formData.get("product") as string

    console.log("Searching for:", searchQuery)
    e.currentTarget.reset()
}

  return (
    <form onSubmit={handleSubmit} className="w-full flex border-[1px] px-4 py-2 rounded-md">
      <input
        name="product"
        type="text"
        placeholder="Search for products..."
        className="outline-0 flex-1"
      />
      <button type="submit" className="cursor-pointer">
        <Search className="size-4" />
      </button>
    </form>
  );
}

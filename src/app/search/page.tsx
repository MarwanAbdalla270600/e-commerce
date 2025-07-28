import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/product";
import { supabasePrivate } from "@/lib/superbaseClient";
import Image from "next/image";

export default async function Home({}) {
  const page = 2;
  const pageSize = 12;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const response = await supabasePrivate
    .from<"products", Product>("products")
    .select("*")
    .order("price", { ascending: true }) // or false for descending
    .range(from, to);

  const data: Product[] | null = response.data;

  return (
    <main>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4 mx-auto max-w-7xl">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

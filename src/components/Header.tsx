import MobileSidebar from "./MobileSidebar";
import SearchInput from "./SearchInput";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  return (
    <header className="flex justify-between py-8 px-4 items-center relative">
      <div className="contents md:hidden">
        <MobileSidebar />
      </div>

      <h1 className="text-lg font-bold">Acme Store</h1>

      <div className="hidden md:block w-96">
        <SearchInput />
      </div>

      <ShoppingCart/>
    </header>
  );
}

import MobileSidebar from "./MobileSidebar";
import SearchInput from "./SearchInput";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  return (
    <header className="flex justify-between py-8 px-4 items-center relative">
      <div className="contents md:hidden">
        <MobileSidebar />
      </div>

      <h1>Acme Store</h1>

      <div className="hidden md:block">
        <SearchInput />
      </div>

      <ShoppingCart/>
    </header>
  );
}

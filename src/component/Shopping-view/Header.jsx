import { LogIn, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

//menu items
const MenuItems = () => {
  return (
    <nav>
      <ul className="flex gap-8 list-none text-2xl uppercase">
        <li className="">
          <Link className="no-underline">Home</Link>
        </li>
        <li>
          <Link>Products</Link>
        </li>
        <li>
          <Link>Contacts us</Link>
        </li>
      </ul>
    </nav>
  );
};

const HeaderRightContent = () => {
  return (
    <div className="flex gap-5 items-center">
      <button className="flex items-center font-bold gap-1 bg-gray-900 text-white rounded-md w-30 h-10 px-3 ">
        <ShoppingBag />
        Cart
      </button>
      <button className="flex items-center font-bold gap-1 bg-black text-white rounded-md w-30 h-10 px-3 ">
        <LogIn />
        Login
      </button>
    </div>
  );
};

const ShoppingHeader = () => {
  return (
    <div className="w-full flex items-center justify-between px-32 py-3  ">
      <div>
        <h1 className="font-bold text-3xl">MineKart</h1>
      </div>
      <MenuItems />
      <HeaderRightContent />
    </div>
  );
};

export default ShoppingHeader;

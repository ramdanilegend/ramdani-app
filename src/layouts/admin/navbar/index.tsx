import { BellIcon } from "@heroicons/react/outline";
import ProfileMenu from "./ProfileMenu";

function Navbar() {
  return (
    <header className="flex items-center fixed w-[calc(100%_-_280px)] top-0 right-0 left-auto h-16 shadow">
      <div className="flex justify-end w-full mr-5">
        <button
          type="button"
          className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <ProfileMenu />
      </div>
    </header>
  );
}

export default Navbar;

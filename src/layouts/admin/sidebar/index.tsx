import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="w-sidebar border-solid bg-cyan-500">
      <div className="h-screen">
        <div className="flex items-center justify-between h-16 mx-3">
          asd{" "}
          <button
            type="button"
            className="p-1 rounded-full text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">View notifications</span>
            <ChevronDoubleLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import { ReactNode } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface Props {
  children: ReactNode;
}

function AdminLayout({ children }: Props) {
  return (
    <div className="flex">
      <Navbar />
      <Sidebar />
      <main className="mt-16">{children}</main>
    </div>
  );
}

export default AdminLayout;

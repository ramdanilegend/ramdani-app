import { ReactNode } from "react";
import Navbar from "./navbar";

interface Props {
  children: ReactNode;
}

function AdminLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default AdminLayout;

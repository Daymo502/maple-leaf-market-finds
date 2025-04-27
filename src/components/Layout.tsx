import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" data-oid="uv0gyfd">
      <Header data-oid="n2-4cg." />
      <main className="flex-1" data-oid="vkedbw_">
        {children}
      </main>
      <Footer data-oid="v03y6ip" />
    </div>
  );
};

export default Layout;

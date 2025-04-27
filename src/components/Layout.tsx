import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" data-oid="d53:not">
      <Header data-oid="bysbeow" />
      <main className="flex-1" data-oid="lz7.e:7">
        {children}
      </main>
      <Footer data-oid="79:b6oh" />
    </div>
  );
};

export default Layout;

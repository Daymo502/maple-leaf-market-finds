import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" data-oid="yb_vcsv">
      <Header data-oid="ip-aqtg" />
      <main className="flex-1" data-oid="m45817p">
        {children}
      </main>
      <Footer data-oid=":1r1.9k" />
    </div>
  );
};

export default Layout;

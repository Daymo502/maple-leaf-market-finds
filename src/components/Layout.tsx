import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" data-oid="knrksbi">
      <Header data-oid="10jvf22" />
      <main className="flex-1" data-oid="jnshqps">
        {children}
      </main>
      <Footer data-oid="ddad3ol" />
    </div>
  );
};

export default Layout;

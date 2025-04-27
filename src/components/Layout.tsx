import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" data-oid="cb1y4m5">
      <Header data-oid="yivjn2r" />
      <main className="flex-1" data-oid="v32dd63">
        {children}
      </main>
      <Footer data-oid="zetq1qp" />
    </div>
  );
};

export default Layout;

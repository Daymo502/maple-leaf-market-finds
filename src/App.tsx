import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductListing from "./pages/ProductListing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient} data-oid="vv-hl9w">
    <TooltipProvider data-oid="97k_3fq">
      <Toaster data-oid="vnjjf8y" />
      <Sonner data-oid="i77:3yb" />
      <BrowserRouter data-oid="4f:-xsi">
        <Routes data-oid="wb5yptl">
          <Route
            path="/"
            element={<Index data-oid="tlqd4rg" />}
            data-oid="jnnnuwl"
          />

          <Route
            path="/all-products"
            element={<ProductListing data-oid="t9tat3l" />}
            data-oid="k1ftnmz"
          />

          <Route
            path="/canadian-products"
            element={<ProductListing data-oid="bj:rcvq" />}
            data-oid="40zgpw9"
          />

          <Route
            path="/category/:categoryId"
            element={<ProductListing data-oid="2tu6r8m" />}
            data-oid=":5oq-wu"
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={<NotFound data-oid="7nbb8r7" />}
            data-oid="x:0a6-4"
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

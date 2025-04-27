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
  <QueryClientProvider client={queryClient} data-oid="evo2v42">
    <TooltipProvider data-oid="mrj.lal">
      <Toaster data-oid="b66gbgr" />
      <Sonner data-oid=":xhehh0" />
      <BrowserRouter data-oid="ntk4xxg">
        <Routes data-oid="p-usgea">
          <Route
            path="/"
            element={<Index data-oid="vby8al5" />}
            data-oid="3y4o5qy"
          />

          <Route
            path="/all-products"
            element={<ProductListing data-oid="g8b9irn" />}
            data-oid="-rnu5dh"
          />

          <Route
            path="/canadian-products"
            element={<ProductListing data-oid="m0-xv8w" />}
            data-oid="e24::8v"
          />

          <Route
            path="/category/:categoryId"
            element={<ProductListing data-oid="75e6ok4" />}
            data-oid="umyykx_"
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={<NotFound data-oid="ekfk3h7" />}
            data-oid="q91aq6e"
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

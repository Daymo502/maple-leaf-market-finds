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
  <QueryClientProvider client={queryClient} data-oid="oyrtyc-">
    <TooltipProvider data-oid="wcoub0m">
      <Toaster data-oid="rpg6lb4" />
      <Sonner data-oid="mgy3h4a" />
      <BrowserRouter data-oid="6n---q3">
        <Routes data-oid="w:q0g..">
          <Route
            path="/"
            element={<Index data-oid="1d2guxa" />}
            data-oid="htr6u8m"
          />

          <Route
            path="/all-products"
            element={<ProductListing data-oid="ju::.ya" />}
            data-oid="4gkgr8q"
          />

          <Route
            path="/canadian-products"
            element={<ProductListing data-oid="2-0:v:0" />}
            data-oid="0_khdpc"
          />

          <Route
            path="/category/:categoryId"
            element={<ProductListing data-oid="puknm_f" />}
            data-oid="ukbtgwl"
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={<NotFound data-oid="s3mydwc" />}
            data-oid="la6_qzo"
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

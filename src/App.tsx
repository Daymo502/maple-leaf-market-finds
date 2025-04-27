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
  <QueryClientProvider client={queryClient} data-oid="k8yxdp7">
    <TooltipProvider data-oid="qyztu20">
      <Toaster data-oid="n93miv9" />
      <Sonner data-oid="09z:44." />
      <BrowserRouter data-oid="5lo:ya-">
        <Routes data-oid=".ry9vk2">
          <Route
            path="/"
            element={<Index data-oid="ojbic6l" />}
            data-oid="l9s:hbd"
          />

          <Route
            path="/all-products"
            element={<ProductListing data-oid="kj2w4xb" />}
            data-oid="7q1lbs."
          />

          <Route
            path="/canadian-products"
            element={<ProductListing data-oid="h3hs_.-" />}
            data-oid="sld6a7d"
          />

          <Route
            path="/category/:categoryId"
            element={<ProductListing data-oid="oyvu2y1" />}
            data-oid="zzv9r:u"
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={<NotFound data-oid="7omb_jl" />}
            data-oid="0wai2gi"
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

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
  <QueryClientProvider client={queryClient} data-oid="5iiq3u8">
    <TooltipProvider data-oid="fcjzqiw">
      <Toaster data-oid="23g58l-" />
      <Sonner data-oid="o-obh2." />
      <BrowserRouter data-oid="ibus.g9">
        <Routes data-oid=":hy899q">
          <Route
            path="/"
            element={<Index data-oid="2cqtzyc" />}
            data-oid="tc3kap3"
          />

          <Route
            path="/all-products"
            element={<ProductListing data-oid="z4cf1jk" />}
            data-oid="p3fnh.e"
          />

          <Route
            path="/canadian-products"
            element={<ProductListing data-oid="k1imlc0" />}
            data-oid="4xj6ay1"
          />

          <Route
            path="/category/:categoryId"
            element={<ProductListing data-oid="yhq4q0a" />}
            data-oid="6djuzwr"
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={<NotFound data-oid="6lg1yd7" />}
            data-oid="y3679rw"
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

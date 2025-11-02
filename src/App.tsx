import { Routes, Route } from "react-router-dom";
import { Header } from "./shared/layout/Header";

import { ProductListPage } from "./pages/ProductList/ProductListPage";
import { ProductDetailPage } from "./pages/ProductDetail/ProductDetailPage";

function App() {
  return (
    <div>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

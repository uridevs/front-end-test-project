import { Routes, Route } from "react-router-dom";
import { Header } from "./shared/layout/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<span>Product List Page </span>} />
          <Route
            path="/product/:id"
            element={<span>Product Detail Page</span>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

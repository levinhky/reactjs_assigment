import Detail from "pages/Detail/Detail";
import Home from "components/Home/Home";
import ProductGrid from "pages/ProductGrid/ProductGrid";
import Login from "pages/Login/Login";

export const routes = [
  { path: '', element: <Home /> },
  { path: "detail", element: <Detail /> },
  { path: "collections/all", element: <ProductGrid /> },
  { path: "account/login", element: <Login /> },
]
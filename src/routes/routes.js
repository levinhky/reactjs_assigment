import Detail from "components/Detail/Detail";
import Home from "components/Home/Home";

export const publicRouter = [
  { path: '', element: <Home /> },
  { path: "detail", element: <Detail /> },
]
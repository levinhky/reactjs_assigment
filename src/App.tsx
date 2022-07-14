import DefaultLayout from "components/DefaultLayout/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import { routes } from "routes/routes";

function App() {
  const Layout = DefaultLayout;

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<Layout>{route.element}</Layout>}
        />
      ))}
    </Routes>
  );
}

export default App;

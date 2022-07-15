import DefaultLayout from "components/DefaultLayout/DefaultLayout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "routes/routes";

function App() {
  const Layout = DefaultLayout;

  return (
    <React.Suspense
      fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}
    >
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
      </Routes>
    </React.Suspense>
  );
}

export default App;

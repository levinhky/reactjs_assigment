import DefaultLayout from "components/DefaultLayout/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import { publicRouter } from "routes/routes";

function App() {
  const Layout = DefaultLayout;

  return (
    <Routes>
      {publicRouter.map((route, index) => (
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

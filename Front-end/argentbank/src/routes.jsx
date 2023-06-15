import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Head from "./layout/Head";

function Routes() {
  const routes = [
    {
      path: "/",
      element: <Head />,
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default Routes;

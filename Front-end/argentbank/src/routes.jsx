import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import MainLayout from "./layout/MainLayout";

// import pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Users from "./pages/Users";
import Error from "./pages/Error";

function Routes() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/users", element: <Users /> },
        { path: "*", element: <Error /> },
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default Routes;

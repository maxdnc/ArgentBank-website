import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import MainLayout from "./layout/MainLayout";

// import pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Users from "./pages/Users";

function Routes() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/users", element: <Users /> },
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default Routes;

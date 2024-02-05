import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProtectedRoutes from "../components/protectedRoute";
import Characters from "../screens/characters";
import Details from "../screens/details";
import Login from "../screens/login";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
        path: "/characters",
        element: <ProtectedRoutes component={Characters} />,
    },
    {
        path: "/characters/:id",
        element: <ProtectedRoutes component={Details} />,
    }
  ]);

const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default Routes;
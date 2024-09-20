import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/routers/router";

export const App = () => {
  return <RouterProvider router={router} />;
};

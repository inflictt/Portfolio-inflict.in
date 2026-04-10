import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Blogs from "../Pages/Blogs";
import Portfolio from "../Pages/Portfolio";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Portfolio /> },
      { path: "blogs", element: <Blogs /> },
    ],
  },
]);

export default router;
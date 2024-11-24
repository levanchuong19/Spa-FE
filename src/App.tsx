import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Service from "./Pages/Dichvu";
// import Category from "./Pages/Category";
// import Price from "./Pages/Price";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/san-pham",
          // element: <Category />,
          element: <Home />,
        },
        {
          path: "/bang-gia",
          // element: <Price />,
          element: <Home />,
        },
        {
          path: "/dich-vu",
          element: <Service />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

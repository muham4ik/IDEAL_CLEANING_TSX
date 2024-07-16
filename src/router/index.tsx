import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import App from "../App";
  import {SignIn,Main } from "@pages";
  
  const index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" elemetn={<App />}>
          <Route index element={<SignIn />} />
          <Route path="main/*" element={<Main/>}>
          </Route>
        </Route>
      )
    );
  
    return <RouterProvider router={router} />;
  };
  export default index;
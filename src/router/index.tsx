import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { SignIn, Main, Service,Order,Client} from "@pages";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />}/>
        <Route path="main" element={<Main/>}>
          <Route index element={<Service />} />
          <Route path="order" element={<Order/>} />
          <Route path="client" element={<Client/>} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;

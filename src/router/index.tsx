import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Invoice from "../modules/invoice/views/Invoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Invoice />,
      },
     
    ],
  },
]);

export default router;

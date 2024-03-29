import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Detail, ErrorPage, Home } from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/character/:id',
                element: <Detail />
            }
        ],
    },
]);

export default router;  

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Craft from "./Craft.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>404 Not found</div>,
	},
	{
		path: "/craft",
		element: <Craft />,
		errorElement: <div>404 Not found</div>,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

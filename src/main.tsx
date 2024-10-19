import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nextjs from "./Nextjs.tsx";
import Reactjs from "./Reactjs.tsx";
import Animations from "./Animations.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>404 Not found</div>,
	},
	{
		path: "/nextjs",
		element: <Nextjs />,
		errorElement: <div>404 Not found</div>,
	},
	{
		path: "/reactjs",
		element: <Reactjs />,
		errorElement: <div>404 Not found</div>,
	},
	{
		path: "/animations",
		element: <Animations />,
		errorElement: <div>404 Not found</div>,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

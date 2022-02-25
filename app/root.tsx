import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";
import NavBar from "./components/navbar";
import styles from "~/tailwind.css";

export let links: LinksFunction = () => {
	return [
		{
			href: styles,
			rel: "stylesheet"
		}
	];
};

export const meta: MetaFunction = () => {
	return { title: "New Remix App" };
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-surface">
				<NavBar />
				<div className="mt-16 mx-auto max-w-6xl p-4">
					<Outlet />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

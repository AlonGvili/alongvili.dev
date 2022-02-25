import { Link, NavLink } from "remix";

export default function NavBar() {
	return (
		<nav className="flex justify-between max-w-6xl mx-auto fixed inset-0 h-16 p-4">
			<Link className="text-[#394359]" to="/">
				AlonGvili
			</Link>
			<div className="flex items-center space-x-6">
				<NavLink to="/projects" className={({isActive}) => isActive ? 'text-white' : `text-[#394359]`}>
					Projects
				</NavLink>
				<NavLink to="/lists" className={({isActive}) => isActive ? 'text-white' : `text-[#394359]`}>
					Lists
				</NavLink>
				<NavLink to="/me" className={({isActive}) => isActive ? 'text-white' : `text-[#394359]`}>
					Me
				</NavLink>
			</div>
		</nav>
	);
}

import { NavLink } from "react-router-dom";

function MainNavigation() {
	return (
	<header>
		<nav>
			<ul>
				<li><NavLink to="/" end>Home Page</NavLink></li>
				<li><NavLink to="/products">Products</NavLink></li>
			</ul>
		</nav>
	</header>
	)
}

export default MainNavigation;
import { Link } from "react-router-dom";

function MainNavigation() {
	return <header>
		<nav>
			<ul>
				<li><Link to="/">Home Page</Link></li>
				<li><Link to="/products">Products</Link></li>
			</ul>
		</nav>
	</header>
}

export default MainNavigation;
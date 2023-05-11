import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function RootLayot() {
	return (
	<>
	<MainNavigation />
	<main>
		<Outlet/>
	</main>
	</>
	)
}

export default RootLayot;
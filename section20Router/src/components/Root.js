import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function RootLayot() {
	return (
	<>
	<MainNavigation />
	<Outlet/>
	</>
	)
}

export default RootLayot;
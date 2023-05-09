import classes from './MainNavigation.module.css';
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
        <li><NavLink to="/" end>Home Page</NavLink></li>
        <li><NavLink to="/events">Events Page</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

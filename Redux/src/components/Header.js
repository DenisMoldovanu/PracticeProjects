import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import { useDispatch } from "react-redux"
const Header = () => {

  const dispatch = useDispatch();

  const handleLogout = (e) =>{
    dispatch(authActions.logout())
  }
  const isLogin = useSelector(state => state.auth.isLogin)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
    {isLogin && (
         <nav>
         <ul>
           <li>
             <a href='/'>My Products</a>
           </li>
           <li>
             <a href='/'>My Sales</a>
           </li>
           <li>
             <button onClick={handleLogout}>Logout</button>
           </li>
         </ul>
       </nav>
    )}
   
    </header>
  );
};

export default Header;

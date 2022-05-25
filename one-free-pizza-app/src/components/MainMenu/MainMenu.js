import { Link } from "react-router-dom";
import "./MainMenu.scss";


function MainMenu() {
  return(
    <div className="navbar">
        <nav>
        <Link to="/">Home</Link>
         <Link to="/get-your-pizza">Get Your Pizza</Link>
         <Link to="/orders">Orders</Link>
     </nav>
    </div>
  );
}

export default MainMenu;
import { Link } from "react-router-dom";
import "./MenuListOptions.css";
import { MAIN_ROUTES } from "../../config/appData";

const menuList = [
  { name: "Profile Settings", route: MAIN_ROUTES.profileSetting },

  { name: "Account Settings", route: MAIN_ROUTES.accountSetting },

  { name: "Logout", route: MAIN_ROUTES.logout },
];
function MenuListOptions() {
  return (
    <ul className="listStyle">
      {menuList.map((item, index) => {
        return (
          <Link key={index} className="link" to={item.route}>
            <li className="menuItem">{item.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default MenuListOptions;

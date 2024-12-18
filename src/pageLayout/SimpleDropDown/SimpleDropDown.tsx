import { useState, useEffect } from "react";
import "./SimpleDropDown.css";
import MenuListOptions from "../../components/MenuListOptions/MenuListOptions";
const SimpleDropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleMenu} className="profile-button">
        Profile
      </button>
      {isMenuOpen && (
        <ul className="dropdown-menu">
          <MenuListOptions />
        </ul>
      )}
    </div>
  );
};

export default SimpleDropdownMenu;

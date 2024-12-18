import { useState, useEffect } from "react";
import "./SideMenu.css";
import MenuListOptions from "../../components/MenuListOptions/MenuListOptions";
const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".side-menu-container") &&
        !target.closest(".profile-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <button onClick={toggleMenu} className="profile-button">
        Profile
      </button>
      <div
        className={`side-menu-container ${isMenuOpen ? "" : "sidebar-open"}`}
      >
        <ul className="listStyle">
          <MenuListOptions />
        </ul>
      </div>
    </>
  );
};

export default SideMenu;

import SimpleDropdownMenu from "../../pageLayout/SimpleDropDown/SimpleDropDown";
import SideMenu from "../../pageLayout/SideMenu/SideMenu";
import ModalPopup from "../../pageLayout/ModalPopup/ModalPopup";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="layout">
      <h1>Profile Menu Styles</h1>
      <h2>Simple Dropdown Style</h2>
      <SimpleDropdownMenu />
      <h2>Side Menu Style</h2>
      <SideMenu />
      <h2>Modal Popup Style</h2>
      <ModalPopup />
    </div>
  );
}

export default HomePage;

import { useState, useEffect } from "react";
import "./ModalPopup.css";
import MenuListOptions from "../../components/MenuListOptions/MenuListOptions";
const ModalPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isModalOpen &&
        !target.closest(".modal-content") &&
        !target.closest(".profile-button")
      ) {
        setIsModalOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (isModalOpen && event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <button onClick={toggleModal} className="profile-button">
        Profile
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ul className="list-style">
              <MenuListOptions />
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPopup;

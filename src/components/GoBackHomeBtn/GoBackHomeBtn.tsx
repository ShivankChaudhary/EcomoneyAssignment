import { useNavigate } from "react-router-dom";
import { MAIN_ROUTES } from "../../config/appData";
import "./GoBackHomeBtn.css";
function GoBackHomeBtn() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate(MAIN_ROUTES.home);
  };
  return (
    <div>
      <button className="btn" onClick={redirectToHome}>
        Go Back
      </button>
    </div>
  );
}

export default GoBackHomeBtn;

import { useLocation, useNavigate } from "react-router";
import { ReactComponent as ArrowRightSVG } from "../../assets/icons/arrow-right.svg";
import { Routes } from "../../utils";
import styles from "./GoToNextPage.module.css";

const GoToNextPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRedirection = () => {
    if (location.pathname === Routes.SCORES) {
      navigate(Routes.TO_DO_LIST);
    }
    if (location.pathname === Routes.TO_DO_LIST) {
      navigate(Routes.SHOPPING_CART);
    }
    if (location.pathname === Routes.SHOPPING_CART) {
      navigate(Routes.CHECK_LIST);
    }
    if (location.pathname === Routes.CHECK_LIST) {
      navigate(Routes.FAMILY_TREE);
    }
    if (location.pathname === Routes.FAMILY_TREE) {
      navigate(Routes.SCORES);
    }
  };

  return (
    <div className={styles.button} onClick={handleRedirection}>
      <ArrowRightSVG />
    </div>
  );
};

export default GoToNextPage;

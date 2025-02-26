import { useNavigate, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const Modes = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/dashboard'); 
  };

  return (

    <div className={styles.wrapper}>

      {/* -----Navbar----- */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <i className="fas fa-home" onClick={handleHomeClick}></i>
        </div>
        <div className={styles.navRight}>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </nav>

      {/* Render the selected mode component here */}
      <Outlet/>
      
    </div>

  );
};

export default Modes;

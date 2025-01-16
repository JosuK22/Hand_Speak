import PropTypes from "prop-types"; 
import Logo from "../../../assets/Logo/Logo1.png";
import styles from "./ToggleButton.module.css"; 

const ToggleButton = ({ variant, checked, onChange, id }) => {
  return (
    <div>
      {/* Render for the first toggle button with variant styles */}
      {variant === "first" && (
        <div className={`${styles.toggleButtonCover} ${checked ? styles.checked : ""}`}>
          <div className={`${styles.button} ${styles.r}`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={checked}
              onChange={onChange} // Handler passed from parent
            />
            <div className={styles.knobs}>
              <div className={`${styles.knobText} ${checked ? styles.checked : ""}`}>
                {checked ? "ON" : "OFF"}
              </div>
            </div>
            <div className={styles.layer}></div>
            <div className={`${styles.logoContainer} ${checked ? styles.checkedLogo : ""}`}>
              <img className={styles.logo} src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      )}

      {/* Render for the second toggle button with variant styles */}
      {variant === "second" && (
        <div>
          <input
            id={id} /* Unique ID for each switch */
            className={styles.checkboxInput}
            type="checkbox"
            checked={checked}
            onChange={onChange} // Handler passed from parent
          />
          <label className={styles.toggleSwitch} htmlFor={id}>
            <span className={`${styles.text} ${styles.off}`}>OFF</span>
            <span className={`${styles.text} ${styles.on}`}>ON</span>
          </label>
        </div>
      )}
    </div>
  );
};

// Prop validation using PropTypes
ToggleButton.propTypes = {
  variant: PropTypes.oneOf(["first", "second"]), // Variant to choose the style
  checked: PropTypes.bool.isRequired,  // Makes sure checked is a boolean
  onChange: PropTypes.func.isRequired, // Makes sure onChange is a function
  id: PropTypes.string.isRequired, // Ensure each toggle has a unique id
};

export default ToggleButton;


import styles from "./Display.module.css";

const Display = ({displayValue}) => {
  return (
    <input
      id={styles["display-result"]}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};
export default Display;

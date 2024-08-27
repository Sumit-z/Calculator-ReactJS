import styles from "./Buttons.module.css";

const Buttons = ({buttonHit}) => {

  

  const ButtonNames = [
    "1",
    "2",
    "3",
    "+",
    "4",
    
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "DEL",
    "C",
    "=",
  ];
  return (
    <div className={styles["buttons-container"]}>
      {ButtonNames.map((Button) => (
        <button 
        key={Button}
        className={styles["calc-buttons"]}
        onClick={() =>buttonHit(Button)}
        >{Button}</button>
      ))}
    </div>
  );
};
export default Buttons;

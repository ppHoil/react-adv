import { useContext } from "react";
import { ProductContex } from "./ProductCard";
import styles from "../styles/styles.module.css";


export const ProductButtons = () => {
  const { increasBy, counter } = useContext(ProductContex);
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increasBy(-1)}>
        {" "}
        -{" "}
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => increasBy(1)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

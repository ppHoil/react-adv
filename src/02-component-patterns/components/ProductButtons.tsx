import { CSSProperties, useContext } from "react";
import { ProductContex } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increasBy, counter } = useContext(ProductContex);
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
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

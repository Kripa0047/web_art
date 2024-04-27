import styles from "./star.module.css";
import { Position } from "../../../../../../components";

const Star = ({ x, y, scale = 1, bgColor, className }) => {
  return (
    <Position.Element x={x} y={y} className={className}>
      <div
        style={{ transform: `scale(${scale})` }}
        className={styles.container}
      >
        <div
          className={styles.circle_1}
          style={{ backgroundColor: bgColor }}
        ></div>
        <div
          className={styles.circle_2}
          style={{ backgroundColor: bgColor }}
        ></div>
        <div
          className={styles.circle_3}
          style={{ backgroundColor: bgColor }}
        ></div>
        <div
          className={styles.circle_4}
          style={{ backgroundColor: bgColor }}
        ></div>
      </div>
    </Position.Element>
  );
};

export default Star;

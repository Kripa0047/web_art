import styles from "./moon.module.css";
import { Position } from "../../../../../../components";

const Moon = () => {
  return (
    <Position.Element x={10} y={80}>
      <div className={styles.shine_three}>
        <div className={styles.shine_two}>
          <div className={styles.shine_one}>
            <div className={styles.moon}></div>
          </div>
        </div>
      </div>
    </Position.Element>
  );
};

export default Moon;

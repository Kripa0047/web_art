import styles from "./clouds.module.css";
import { Position } from "../../../../../../components";

const Cloud = ({ circles, x, y, scale }) => {
  return (
    <Position.Element x={x} y={y}>
      <div
        className={styles.container}
        style={{ transform: `scale(${scale})` }}
      >
        {circles.map((circle, i) => (
          <div
            key={i}
            style={{
              bottom: circle.b,
              left: circle.l,
              transform: `scale(${circle.scale})`,
            }}
            className={styles.cloud_circle}
          ></div>
        ))}
      </div>
    </Position.Element>
  );
};

export default Cloud;

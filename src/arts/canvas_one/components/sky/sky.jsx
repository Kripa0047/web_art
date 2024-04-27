import styles from "./sky.module.css";
import { Position } from "../../../../components";
import { Star, Moon, Cloud } from "./components";
import { Mountain } from "../";

const Sky = () => {
  const generateStars = () => {
    const stars = [];

    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 600;
      const y = Math.random() * 500;
      const scale = Math.random() + 0.3;
      stars.push(
        <Star key={i} x={x} y={y} scale={scale} bgColor={"#154aad"} />
      );
    }

    return stars;
  };

  return (
    <Position.Wrapper className={styles.container}>
      <div className={styles.sky}>{generateStars()}</div>
      <Moon />
      <Cloud
        circles={[
          { l: 0, b: -15, scale: 1 },
          { l: 20, b: -5, scale: 0.7 },
          { l: 42, b: 4, scale: 1.2 },
          { l: 64, b: 1, scale: 0.7 },
          { l: 80, b: -7, scale: 0.65 },
          { l: 95, b: -15, scale: 0.65 },
          { l: 45, b: -26, scale: 2.2 },
        ]}
        x={-20}
        y={220}
      />
      <Cloud
        circles={[
          { l: 3, b: -15, scale: 1.1 },
          { l: 24, b: -13, scale: 0.65 },
          { l: 43, b: 0, scale: 1 },
          { l: 64, b: 15, scale: 1.13 },
          { l: 83, b: 5, scale: 0.75 },
          { l: 105, b: -2, scale: 1.05 },
          { l: 125, b: -16, scale: 1.03 },
          { l: 65, b: -16, scale: 2.2 },
        ]}
        x={230}
        y={70}
      />
      <Position.Element x={0} y={263}>
        <Mountain scale={0.9} />
      </Position.Element>
      <Position.Element x={200} y={238}>
        <Mountain scale={1.1} />
      </Position.Element>
      <Cloud
        circles={[
          { l: 3, b: -18, scale: 1.15 },
          { l: 22, b: -9, scale: 0.65 },
          { l: 37, b: -2, scale: 0.67 },
          { l: 57, b: 6, scale: 1.1 },
          { l: 75, b: 1, scale: 0.75 },
          { l: 92, b: -6, scale: 0.75 },
          { l: 111, b: -19, scale: 1.03 },
          { l: 60, b: -25, scale: 2.2 },
        ]}
        x={430}
        y={150}
        scale={1.3}
      />
    </Position.Wrapper>
  );
};

export default Sky;

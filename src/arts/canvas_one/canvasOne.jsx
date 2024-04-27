import styles from "./canvasOne.module.css";
import { Fire, FireGlow, House, Sky, Tree, Water } from "./components";
import { Position } from "../../components";

const CanvasOne = () => {
  const buildTrees = () => {
    const trees = [
      { scale: 0.8, x: 190, y: 297 },
      { scale: 0.6, x: 270, y: 348 },
      { scale: 1, x: 320, y: 246 },
      { scale: 1.16, x: 515, y: 205 },
      { scale: 0.87, x: 660, y: 279 },
    ];

    return trees.map((tree, i) => (
      <Position.Element x={tree.x} y={tree.y}>
        <Tree scale={tree.scale} />
      </Position.Element>
    ));
  };

  return (
    <div className={styles.container}>
      <Position.Wrapper
        className={styles.canvas}
        height={700}
        width={1000}
        overflowHidden
      >
        <Sky />
        {buildTrees()}
        <Position.Element x={293} y={414}>
          <FireGlow />
        </Position.Element>
        <Position.Element className={styles.land}></Position.Element>
        <Position.Element x={230} y={550}>
          <Water />
        </Position.Element>
        <Position.Element y={365} x={420}>
          <House />
        </Position.Element>
        <Position.Element x={240} y={500}>
          <Fire />
        </Position.Element>
      </Position.Wrapper>
    </div>
  );
};

export default CanvasOne;

import styles from "./tree.module.css";

const Tree = ({ scale }) => {
  const level = (scale, x, y) => (
    <div
      className={styles.level}
      style={{ transform: `scale(${scale})`, left: `${x}px`, top: `${y}px` }}
    >
      <div className={styles.level_1}></div>
      <div className={styles.level_2}></div>
    </div>
  );
  return (
    <div className={styles.container} style={{ transform: `scale(${scale})` }}>
      {level(0.9, 6)}
      {level(1.1, -5, 15)}
      {level(1.3, -15, 30)}
      {level(1.45, -20, 43)}
      {level(1.6, -30, 55)}
    </div>
  );
};

export default Tree;

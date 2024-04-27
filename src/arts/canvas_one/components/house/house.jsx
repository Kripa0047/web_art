import styles from "./house.module.css";

const House = () => {
  return (
    <div className={styles.container}>
      <div className={styles.front_wall}></div>
      <div className={styles.side_wall}>
        <div className={styles.side_wall_shadow}></div>
      </div>
      <div className={styles.shade_back}></div>
      <div className={styles.shade_front}>
        <div className={styles.shade_front_shadow}></div>
      </div>
      <div className={styles.level}>
        <div className={styles.level_1}></div>
        <div className={styles.level_2}></div>
      </div>
      <div className={styles.level_inner}>
        <div className={styles.level_inner_1}></div>
        <div className={styles.level_inner_2}></div>
      </div>
      <div className={styles.rope_front_right}></div>
      <div className={styles.rope_front_left}></div>
      <div className={styles.rope_back}></div>
    </div>
  );
};

export default House;

import styles from "./mountain.module.css";

const Mountain = ({ scale }) => {
  return (
    <div className={styles.container} style={{ transform: `scale(${scale})` }}>
      <div className={styles.mountain}>
        <div className={styles.shadow}></div>
        <div className={styles.shadow_2}></div>
      </div>
    </div>
  );
};

export default Mountain;

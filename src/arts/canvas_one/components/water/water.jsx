import styles from "./water.module.css";

const Water = () => {
  const waves = (waves) =>
    waves.map((e, i) => (
      <div
        key={i}
        className={styles.wave}
        style={{ width: `${e.width}px`, left: `${e.left}px` }}
      ></div>
    ));

  const antiWave = (x, width) => (
    <div
      className={styles.anti_wave}
      style={{ left: `${x}px`, width: `${width}px` }}
    >
      <div className={styles.cave_wave}></div>
      <div className={styles.cover_1}></div>
      <div className={styles.cover_2}></div>
    </div>
  );

  return (
    <div className={styles.river}>
      <div className={styles.layer}>
        {waves([
          { left: 10, width: 50 },
          { left: 70, width: 430 },
          { left: 520, width: 38 },
        ])}
      </div>
      <div className={styles.anti_layer} style={{ top: "20px" }}>
        {antiWave(200, 40)}
        {antiWave(250, 150)}
      </div>
      <div className={styles.layer} style={{ top: "40px" }}>
        {waves([
          { left: 40, width: 21 },
          { left: 75, width: 21 },
          { left: 120, width: 350 },
        ])}
      </div>
      <div className={styles.anti_layer} style={{ top: "60px" }}>
        {antiWave(180, 140)}
        {antiWave(330, 50)}
        {antiWave(397, 50)}
      </div>
      <div className={styles.layer} style={{ top: "80px" }}>
        {waves([
          { left: 70, width: 31 },
          { left: 110, width: 380 },
          { left: 500, width: 21 },
        ])}
      </div>
      <div className={styles.anti_layer} style={{ top: "100px" }}>
        {antiWave(220, 40)}
        {antiWave(270, 80)}
      </div>
      <div className={styles.layer} style={{ top: "120px" }}>
        {waves([
          { left: 130, width: 60 },
          { left: 200, width: 200 },
          { left: 410, width: 21 },
          { left: 440, width: 21 },
        ])}
      </div>
    </div>
  );
};

export default Water;

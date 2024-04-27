import styles from "./fire.module.css";

const Fire = () => {
  const flame = (scale, color, x, y) => (
    <svg
      version="1.1"
      id="Layer_1"
      x="-15.8351px"
      y="-11.649px"
      width="35.61px"
      height="49.44px"
      enable-background="new 0 0 125 189.864"
      style={{ left: `${x}px`, top: `${y}px`, transform: `scale(${scale})` }}
      className={styles.flame}
    >
      <path
        class="flame-main"
        fill={color}
        d="M 7 17 C -1 14 6 9 4 5 C 6 6 6 7 6 7 C 7 6 7 5 6 2 C 11 4 12 9 12 11 C 12 10 13 8 14 8 C 12 9 17 17 7 17"
      />
    </svg>
  );

  const makeSparks = () => {
    const sparks = [
      {
        scale: 0.8,
        x: 84,
        y: -6,
      },
      {
        scale: 1.1,
        x: 97,
        y: -24,
      },
      {
        scale: 0.8,
        x: 105,
        y: -50,
      },
      {
        scale: 1,
        x: 120,
        y: -60,
      },
      {
        scale: 1,
        x: 150,
        y: -40,
      },
      {
        scale: 0.3,
        x: 160,
        y: -20,
      },
      {
        scale: 0.9,
        x: 170,
        y: 0,
      },
    ];
    return sparks.map((spark, i) => (
      <div
        key={i}
        style={{
          left: `${spark.x}px`,
          top: `${spark.y}px`,
          transform: `scale(${spark.scale})`,
        }}
        className={styles.sparks}
      ></div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wood}></div>
      {flame(4, "#FFA902", 150, 25)}
      {flame(2.7, "#FFCC3C", 137, 15)}
      {flame(1.7, "#FFD572", 127, 7)}
      {makeSparks()}
    </div>
  );
};

export default Fire;

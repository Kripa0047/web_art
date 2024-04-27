const PositionElement = ({ children, x, y, className, style }) => {
  return (
    <div
      style={{ position: "absolute", top: y, left: x, ...style }}
      className={className}
    >
      {children}
    </div>
  );
};

export default PositionElement;

const PositionWrapper = ({
  children,
  className,
  height,
  width,
  overflowHidden,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        overflow: overflowHidden ? "hidden" : "unset",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default PositionWrapper;

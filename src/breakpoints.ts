interface iSize {
  xs: string;
  sm: string;
  lg: string;
}

const size: iSize = {
  xs: "375px",
  sm: "768px",
  lg: "1200px",
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
};
export default { size, device };

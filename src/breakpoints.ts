interface iSize {
  xs: number;
  sm: number;
  lg: number;
}

const size: iSize = {
  xs: 480,
  sm: 800,
  lg: 1200,
};

const device = {
  xs: `(max-width: ${size.xs})px`,
  sm: `(max-width: ${size.sm})px`,
  lg: `(min-width: ${size.sm})px`,
  xl: `(min-width: ${size.lg})px`,
};
export default { size, device };

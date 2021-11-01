interface iSize {
  xs: number;
  sm: number;
  lg: number;
}

const size: iSize = {
  xs: 375,
  sm: 768,
  lg: 1200,
};

const device = {
  xs: `(max-width: ${size.xs})px`,
  sm: `(max-width: ${size.sm})px`,
  lg: `(max-width: ${size.lg})px`,

};
export default { size, device };

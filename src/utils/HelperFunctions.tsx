export const isInvalidInput = (val: any) => {
  return val.target.value.match(/[A-Za-z]/g);
};

export const getDatesWithStep = (startDays = 0, count = 5, step = 1, isAdding = true) => {
  return Array.from({ length: count }, (_, i) => {
    const date = new Date();
    const doStep = i * step;
    date.setDate(date.getDate() + startDays + (isAdding ? +doStep : -doStep));
    return date;
  });
};

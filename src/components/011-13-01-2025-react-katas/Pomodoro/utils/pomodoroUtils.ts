export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export const minutesToSeconds = (minutes: number): number => {
  return minutes * 60;
};

export const formatDateToDMY = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0"); // День с ведущим нулём
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяц с 01 до 12
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateToHMNumber = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours * 100 + minutes;
};

export const formatHMNumberToHMString = (HMNumber: number) => {
  const minNum = HMNumber % 100;
  const hoursNum = (HMNumber - minNum) / 100 + (minNum === 60 ? 1 : 0);
  const minStr = minNum === 0 || minNum === 60 ? "00" : String(minNum).padStart(2, "0");
  const hoursStr = hoursNum === 0 ? "00" : String(hoursNum).padStart(2, "0");
  return hoursStr + ":" + minStr;
};

// export const loadState = () => {
//   // Можно добавить дополнительную логику загрузки
// };

// export const saveState = (state: any) => {
//   // Можно добавить дополнительную логику сохранения
// };

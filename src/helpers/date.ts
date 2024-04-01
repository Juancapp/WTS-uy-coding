import {
  format,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  differenceInDays,
} from "date-fns";

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const start = new Date();
const end = new Date(2024, 3, 20);

const diffDays = differenceInDays(end, start);

export const datesArr: string[] = [];

for (let i = 0; i < 10; i++) {
  const randomDays = getRandomInt(0, diffDays);

  const randomHour = getRandomInt(9, 21);

  let randomDate = addDays(start, randomDays);
  randomDate = setHours(randomDate, randomHour);
  randomDate = setMinutes(randomDate, 0);
  randomDate = setSeconds(randomDate, 0);

  const formattedDate = format(randomDate, "dd/MM/yyyy HH:mm");

  datesArr.push(formattedDate);
}

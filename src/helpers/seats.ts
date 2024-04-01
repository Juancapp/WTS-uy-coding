export const seatsArr: { row: number; seat: number }[] = [];

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    seatsArr.push({ row: i, seat: j });
  }
}

export function formatDateDDMM(date: Date) {
  const day = String(date.getDate()).padStart(2, "0"); // 2-digit day
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  return `${day}/${month}`;
}

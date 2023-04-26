export const calculateTimeForWeek = (totalSeconds) => {
  const secondsInWeek = 7 * 24 * 60 * 60;
  const timeForWeek = totalSeconds < secondsInWeek ? totalSeconds : secondsInWeek;
  return formatTime(timeForWeek);
}

export const calculateTimeForMonth = (totalSeconds) => {
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const secondsInMonth = daysInMonth * 24 * 60 * 60;
  const timeForMonth = totalSeconds < secondsInMonth ? totalSeconds : secondsInMonth;
  return formatTime(timeForMonth);
}

export const calculateTotalTime = (totalSeconds) => {
  return formatTime(totalSeconds);
}

const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - minutes * 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

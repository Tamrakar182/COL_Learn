export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor(seconds / 60) % 60;
  const secs = seconds % 60;
  return `${hours} : ${mins} : ${secs.toString().padStart(2, '0')}`;
};

export const parseDuration = (duration: string): number => {
  const regex = /(\d+)\s*(hours?|minutes?|seconds?)/i;
  const match = regex.exec(duration);
  if (match) {
    const value = parseInt(match[1], 10);
    const unit = match[2].toLowerCase();
    if (unit.includes('hour')) return value * 3600;
    if (unit.includes('minute')) return value * 60;
    if (unit.includes('second')) return value;
  }
  return 0;
};

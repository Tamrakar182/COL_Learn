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

export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours > 0 ? `${hours} hour${hours !== 1 ? 's' : ''}` : '';
  const formattedMinutes = minutes > 0 ? `${minutes} minute${minutes !== 1 ? 's' : ''}` : '';
  const formattedSeconds = remainingSeconds > 0 ? `${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}` : '';

  return [formattedHours, formattedMinutes, formattedSeconds].filter(Boolean).join(', ');
};

export const formatISOToCustomDate = (isoString: string) => {
  const date = new Date(isoString);

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
}

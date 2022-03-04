export default function adProgressBarWidth(duration, currentTime) {
  return (currentTime / duration) * 100;
}

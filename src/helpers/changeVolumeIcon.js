export default function changeVolumeIcon(newVolume) {
  this.volumeIconSymbol.className = "";
  if (newVolume > 0.7) {
    this.volumeIconSymbol.classList.add("fas", "fa-volume-up");
  } else if (newVolume <= 0.7 && newVolume > 0) {
    this.volumeIconSymbol.classList.add("fas", "fa-volume-down");
  } else if (newVolume == 0) {
    this.volumeIconSymbol.classList.add("fas", "fa-volume-mute");
  }
}

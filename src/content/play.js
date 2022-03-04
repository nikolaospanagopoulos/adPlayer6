import changeClassname from "../helpers/styles";

export default function playPauseContent() {
  if (this.videoElement.paused) {
    changeClassname(this.playBtn, "fa-play", "fa-pause");
    this.videoElement.play();
  } else {
    changeClassname(this.playBtn, "fa-pause", "fa-play");
    this.videoElement.pause();
  }
}

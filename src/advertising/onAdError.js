export default function onAdError() {
  this.videoElement.addEventListener("loadeddata", () =>
    this.getContentDuration()
  );
  this.getContentDuration();
  this.getContentCurrentTime();
  this.playBtn.addEventListener("click", () => this.playPauseContent());
  this.adContainer.addEventListener("click", () => this.playPauseContent());
  this.videoElement.addEventListener(
    "timeupdate",
    this.timeUpdateProgressBar.bind(this)
  );
  this.progressRange.addEventListener("click", this.setProgress.bind(this));
  this.loaderElement && this.loaderElement.remove();
}

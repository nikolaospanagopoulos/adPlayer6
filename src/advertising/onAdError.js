export default function onAdError() {
    this.playBtn.addEventListener('click', () => this.playPauseContent())
    this.adContainer.addEventListener('click', () => this.playPauseContent())
    this.videoElement.addEventListener('timeupdate', this.timeUpdateProgressBar.bind(this))
    this.progressRange.addEventListener('click', this.setProgress.bind(this))
}
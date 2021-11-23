export function timeUpdateProgressBar() {
    this.progressBar.style.width = `${(this.videoElement.currentTime / this.videoElement.duration) * 100}%`
}


export function setProgress(e) {
    console.log(this.videoElement)
    var newTime = e.offsetX / this.progressRange.offsetWidth
    console.log('new time set at ' + newTime)

    this.progressBar.style.width = newTime * 100 + "%"
    this.videoElement.currentTime = newTime * this.videoElement.duration
}



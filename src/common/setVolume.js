export default function setVolume() {
    var oldVolume = this.adsManager.getVolume() || 1
    console.log(this)
    this.volumeRange.addEventListener('click', (e) => {
        var newVolume = e.offsetX / this.volumeRange.offsetWidth;
        console.log(newVolume)
        if (newVolume < 0.1) newVolume = 0;
        if (newVolume > 0.9) newVolume = 1;
        this.volumeBar.style.width = `${newVolume * 100}px`;
        this.adsManager.setVolume(newVolume);
        this.videoElement.volume = newVolume
        //save volume in oldVolume to use after mute
        oldVolume = newVolume;
    })

    this.volumeIconSymbol.addEventListener('click', () => {
        this.volumeIconSymbol.className = "";
        if (this.videoElement.volume > 0) {
            oldVolume = this.videoElement.volume
            this.videoElement.volume = 0
            this.adsManager.setVolume(0)
            this.volumeIconSymbol.classList.add("fas", "fa-volume-mute");
            this.volumeBar.style.width = 0;
        } else {
            this.adsManager.setVolume(oldVolume)
            this.videoElement.volume = oldVolume
            this.volumeBar.style.width = `${oldVolume * 100}%`;
            this.changeVolumeIcon(oldVolume)
        }
    })
}
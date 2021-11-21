import changeClassname from "../helpers/styles"

export default function adStarted() {
    console.log(this.adsManager)
    changeClassname(this.playBtn, 'fa-play', 'fa-pause')
    this.playBtn.addEventListener('click', () => this.adsManager.pause())
    
}
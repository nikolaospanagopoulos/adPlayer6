import createPlayer from "../elements/createPlayer"
import createUi from "../elements/createUi"
import createLink from "../helpers/createScripts"
import resize from "../elements/resize"
import createAdDisplayContainer from "../advertising/createAdvertisingContainer"
import '../../out/ima/ima3'
import adsLoader from "../advertising/adsLoader"
import imaInit from "../advertising/setupIma/imaInit"
import onAdsManagerLoaded from "../advertising/setupIma/adsManager"
import setVolume from "../common/setVolume"
import changeVolumeIcon from "../helpers/changeVolumeIcon"
import playPauseContent from "../content/play"
import { setProgress, timeUpdateProgressBar } from "../content/progressBar"
import onAdError from "../advertising/onAdError"
import calculateTime from "../common/timeDisplay"
import changeClassname from "../helpers/styles"
import setFullscreen from "../common/fullscreen"


export function Player(options) {
    this.options = options
    //create a link for the font awesome css and for custom css
    this.createLink('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css', 'stylesheet')
    this.createLink('../../out/style/style.css', 'stylesheet')
    this.createPlayer()
    this.imaInit()
    this.changePlayButtonOnContentEnd()
    this.fullScreenButton.addEventListener('click',()=>this.setFullscreen())
    this.elementToAppend.style.maxWidth = this.options.elementWidth + 'px'
    this.playerWidth = this.parentElement.offsetWidth
    this.playerHeight = this.parentElement.offsetHeight
    console.log(this.playerWidth)
}

Player.prototype.getContentDuration = function () {
    var contentDurationTime = calculateTime(this.videoElement.duration)
    this.timeDurationElement.textContent = contentDurationTime
}
Player.prototype.getContentCurrentTime = function () {
    this.videoElement.addEventListener('timeupdate', () => {
        var contentCurrentTime = calculateTime(this.videoElement.currentTime)
        this.timeElapsedElement.textContent = contentCurrentTime + " /"
    })
}
Player.prototype.changePlayButtonOnContentEnd = function () {
    this.videoElement.addEventListener('ended', () => changeClassname(this.playBtn, 'fa-pause', 'fa-play'))
}


Player.prototype.setFullscreen = setFullscreen
Player.prototype.onAdError = onAdError
Player.prototype.timeUpdateProgressBar = timeUpdateProgressBar
Player.prototype.setProgress = setProgress
Player.prototype.playPauseContent = playPauseContent
Player.prototype.changeVolumeIcon = changeVolumeIcon
Player.prototype.setVolume = setVolume
Player.prototype.onAdsManagerLoaded = onAdsManagerLoaded
Player.prototype.imaInit = imaInit
Player.prototype.adsLoader = adsLoader
Player.prototype.createAdDisplayContainer = createAdDisplayContainer
Player.prototype.resize = resize
Player.prototype.createPlayer = createPlayer
Player.prototype.createUi = createUi
Player.prototype.createLink = createLink
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


export class Player {

    constructor(options) {

        this.options = options
        //create a link for the font awesome css and for custom css
        this.createLink('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css', 'stylesheet')
        this.createLink('../../out/style/style.css', 'stylesheet')
        this.createPlayer()
        this.imaInit()
        this.changePlayButtonOnContentEnd()


    }

    getContentDuration() {
        var contentDurationTime = calculateTime(this.videoElement.duration)
        this.timeDurationElement.textContent = contentDurationTime
    }
    getContentCurrentTime() {
        this.videoElement.addEventListener('timeupdate', () => {
            var contentCurrentTime = calculateTime(this.videoElement.currentTime)
            this.timeElapsedElement.textContent = contentCurrentTime + " /"

        })

    }
    changePlayButtonOnContentEnd() {
        this.videoElement.addEventListener('ended', () => changeClassname(this.playBtn, 'fa-pause', 'fa-play'))
    }

    onAdError = onAdError
    timeUpdateProgressBar = timeUpdateProgressBar
    setProgress = setProgress
    playPauseContent = playPauseContent
    changeVolumeIcon = changeVolumeIcon
    setVolume = setVolume
    onAdsManagerLoaded = onAdsManagerLoaded
    imaInit = imaInit
    adsLoader = adsLoader
    createAdDisplayContainer = createAdDisplayContainer
    resize = resize
    createPlayer = createPlayer
    createUi = createUi
    createLink = createLink
}
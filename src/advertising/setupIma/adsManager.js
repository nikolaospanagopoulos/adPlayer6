import playPauseContent from "../../content/play";
import changeClassname from "../../helpers/styles";
import { resumeVideoAd } from "../../helpers/videoEvents";
import adProgressBarWidth from "../adProgress";
import adStarted from "../adStarted";
import getDimentions from "./dimensions";

export default function onAdsManagerLoaded(adsManagerLoadedEvent) {
    var adsRenderingSettings = new google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;

    this.adsManager = adsManagerLoadedEvent.getAdsManager(
        this.videoElement,
        adsRenderingSettings
    );

    var dimentions = getDimentions(this.parentElement)
    this.adsManager.init(
        dimentions.width, dimentions.height
        ,
        google.ima.ViewMode.NORMAL
    );


    //every time we bind a function we create a new function reference making it imposible to remove as a listener
    //so we use a variable
    var resume = resumeVideoAd.bind(this, this.adsManager)
    var playPauseContentFn = this.playPauseContent.bind(this)
    var duration;
    var currentTime;

    this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, adStarted.bind(this))


    this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, (e) => {
        console.log('lOADED')
        console.log(e.getAdData())
        duration = e.getAdData().duration
        console.log(duration)
        this.setVolume()
    })
    

    this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, () => {
        changeClassname(this.playBtn, 'fa-pause', 'fa-play')
        this.playBtn.addEventListener('click', resume)
    })

    this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, (e) => {
        currentTime = e.getAdData().currentTime
        this.progressBar.style.width = adProgressBarWidth(duration, currentTime) + '%'
    })
    this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {
        changeClassname(this.playBtn, 'fa-play', 'fa-pause')
        this.playBtn.removeEventListener('click', resume)
    })

    this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, () => {
        this.videoElement.play()
    })


    this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,()=>{
        console.log('resume content')
        this.playBtn.addEventListener('click', playPauseContentFn)
        
    })
}
import changeClassname from "../../helpers/styles";
import { resumeVideoAd } from "../../helpers/videoEvents";
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



    this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, adStarted.bind(this))


    this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, () => {
        console.log('lOADED')
    })

    


    this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, () => {
        changeClassname(this.playBtn,'fa-pause','fa-play')
        this.playBtn.addEventListener('click', resume)
    })

    this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {
        changeClassname(this.playBtn,'fa-play','fa-pause')
        this.playBtn.removeEventListener('click', resume)
    })
}
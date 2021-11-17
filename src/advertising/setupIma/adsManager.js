export default function onAdsManagerLoaded(adsManagerLoadedEvent) {
    var adsRenderingSettings = new google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;

    this.adsManager = adsManagerLoadedEvent.getAdsManager(
        this.videoElement,
        adsRenderingSettings
    );

    this.adsManager.init(
        500,500
        ,
        google.ima.ViewMode.NORMAL
    );

    console.log(this.adsManager)
}
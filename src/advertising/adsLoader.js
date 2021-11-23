export default function adsLoader() {
    this.createAdDisplayContainer()
    var adsLoader = new google.ima.AdsLoader(this.adDisplayContainer)
    // Listen and respond to ads loaded and error events.
    adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this),
        false)
    //put set volume here so that it can be used with ads, ad error, content
    this.setVolume()
    adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        (e) => {
            //  console.error(e.g.g.errorMessage)
            this.playBtn.addEventListener('click', () => this.playPauseContent())
            this.adContainer.addEventListener('click', () => this.playPauseContent())
            this.videoElement.addEventListener('timeupdate', this.timeUpdateProgressBar.bind(this))
            this.progressRange.addEventListener('click', this.setProgress.bind(this))
        },
        false
    );

    var contentEndedListener = function () {
        adsLoader.contentComplete();
    };
    this.videoElement.onended = contentEndedListener;


    // Request video ads.
    var adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = `${this.options.adSrc}`;
    adsRequest.linearAdSlotWidth = 640;
    adsRequest.linearAdSlotHeight = 400;

    adsRequest.nonLinearAdSlotWidth = 640;
    adsRequest.nonLinearAdSlotHeight = 150;

    adsLoader.requestAds(adsRequest);
    console.log(this)
}
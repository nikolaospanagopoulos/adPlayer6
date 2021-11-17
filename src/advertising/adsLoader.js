export default function adsLoader() {
    this.createAdDisplayContainer()
    var adsLoader = new google.ima.AdsLoader(this.adDisplayContainer)
    // Listen and respond to ads loaded and error events.
     adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, ()=>console.log('loaded'),
         false)

    adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        () => console.log('error'),
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
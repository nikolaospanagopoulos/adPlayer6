export default function imaInit() {
    const init = () => {
        this.adsLoader()

        this.playBtn.addEventListener('click', playAds)
        this.adContainer.addEventListener('click', playAds)
    }


    var adsManager = this.adsManager

    var playAds = () => {

        this.adDisplayContainer.initialize()
        try {
            // Initialize the ads manager. Ad rules playlist will start at this time.
            this.adsManager.start();
            this.playBtn.removeEventListener('click', playAds)
            this.adContainer.removeEventListener('click', playAds)
        } catch (adError) {
            console.error(adError, 'error')
            // this.videoElement.play();
        }
    }


    init()
}
export default function imaInit() {
    const init = () => {
        this.adsLoader()

        this.playBtn.addEventListener('click', playAds)
    }


    var adsManager = this.adsManager

    var playAds = () => {

        this.adDisplayContainer.initialize()
        try {
            // Initialize the ads manager. Ad rules playlist will start at this time.
            this.adsManager.start();
        } catch (adError) {
            console.error(adError, 'error')
            // this.videoElement.play();
        }
    }


    init()
}
export default function imaInit() {
    
    const init = () => {
        this.adsLoader()

        this.playBtn.addEventListener('click', playAds)
        this.adContainer.addEventListener('click', playAds)
    }


    var adsManager = this.adsManager

    var playAds = () => {

       
        try {
            this.adDisplayContainer.initialize()
            // Initialize the ads manager. Ad rules playlist will start at this time.
            this.adsManager.start();
        } catch (adError) {
            console.error(adError, 'error')
            this.videoElement.play();
        }
        this.playBtn.removeEventListener('click', playAds)
        this.adContainer.removeEventListener('click', playAds)
    }
     

    init()
}
var fullscreenSet = false
export default function setFullscreen(){
    if(!fullscreenSet){
        this.elementToAppend.style.maxWidth = 'unset'
        this.parentElement.style.width = window.innerWidth + "px";
        this.parentElement.style.height = window.innerHeight + "px";
        this.adsManager.resize(window.innerWidth,window.innerHeight)
        this.parentElement.scrollIntoView();
    }else{
        this.elementToAppend.style.maxWidth = this.options.elementWidth + 'px'
        this.parentElement.style.width = this.playerWidth + "px";
        this.parentElement.style.height = this.playerHeight + "px";
        //get the dimentions from the moment the adsManager was loaded
        this.adsManager.resize(this.dimentions.width,this.dimentions.height)
    }

    fullscreenSet = !fullscreenSet
}
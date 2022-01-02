export default function createPlayer() {
    //create container
    try {
        var loaderHTML = `
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
        if (this.options.elementToAppend) {
            this.elementToAppend = document.querySelector(this.options.elementToAppend)
            this.parentElement = document.createElement('div')
            this.parentElement.classList.add('video-container')
            this.elementToAppend.append(this.parentElement)
            this.videoElement = document.createElement('video')
            this.videoElement.classList.add('video')
            this.videoElement.src = this.options.contentSource
            this.parentElement.insertAdjacentHTML('afterbegin',loaderHTML)
            this.videoElement.addEventListener('canplay',()=>{
                document.querySelector('.lds-ring').remove()
            })
            this.parentElement.append(this.videoElement)

            
            this.createUi()
            this.resize()
        } else {
            throw new Error('No element to append Player')
        }
    } catch (err) {
        console.error(err)
        return
    }


    //create video element



}
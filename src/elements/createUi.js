export default function createUi() {
    var uiHtml = `
    <div id='adContainer'></div>
    <div class="show-controls">
    
        <div class="controls-container">
          <!-- progress bar -->
          <div class="progress-range" title="seek">
            <div class="progress-bar"></div>
          </div>
          <div class="control-group">
            <div class="controls-left">
              <div class="play-controls">
                <i class="fas fa-play" title="Play" id="play-btn"></i>
              </div>
              <div class="volume">
                <div class="volume-icon">
                  <i class="fas fa-volume-up" title="Mute" id="volume-icon"></i>
                </div>
                <div class="volume-range" title="Change Volume">
                  <div class="volume-bar"></div>
                </div>
              </div>
            </div>
            <div class="controls-right">
              <div class="speed" title="Playback Rate">
                <select name="playbackRate" class="player-speed">
                  <option value="0.5">0.5</option>
                  <option value="0.75">0.75</option>
                  <option value="1" selected>1</option>
                  <option value="1.5">1.5</option>
                  <option value="7.75">1.75</option>
                </select>
              </div>
              <div class="time">
                <span class="time-elapsed"> 00:00 /</span>
                <span class="time-duration">00:00</span>
              </div>
              <div class="fullscreen">
                <i class="fas fa-expand" id="fullscreenBtn"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    this.videoElement?.insertAdjacentHTML('afterend',uiHtml)
    this.adContainer = document.getElementById('adContainer')
    this.playBtn = document.getElementById('play-btn')
    
}
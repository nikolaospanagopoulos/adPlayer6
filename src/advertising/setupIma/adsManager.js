import calculateTime from "../../common/timeDisplay";
import changeClassname from "../../helpers/styles";
import timeDesplayHelper from "../../helpers/timeDisplayHelper";
import { resumeVideoAd } from "../../helpers/videoEvents";
import adProgressBarWidth from "../adProgress";
import adStarted from "../adStarted";
import getDimentions from "./dimensions";

export default function onAdsManagerLoaded(adsManagerLoadedEvent) {
  var adsRenderingSettings = new google.ima.AdsRenderingSettings();
  adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;

  this.adsManager = adsManagerLoadedEvent.getAdsManager(
    this.videoElement,
    adsRenderingSettings
  );

  this.dimentions = getDimentions(this.parentElement);
  this.adsManager.init(
    this.dimentions.width,
    this.dimentions.height,
    google.ima.ViewMode.NORMAL
  );

  //every time we bind a function we create a new function reference making it imposible to remove as a listener
  //so we use a variable
  var resume = resumeVideoAd.bind(this, this.adsManager);
  var playPauseContentFn = this.playPauseContent.bind(this);
  var setProgress = this.setProgress.bind(this);
  var timeUpdateContent = this.timeUpdateProgressBar.bind(this);

  var loaderHTML = `
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
  this.adsManager.addEventListener(
    google.ima.AdEvent.Type.STARTED,
    adStarted.bind(this)
  );
  
  this.parentElement.insertAdjacentHTML("afterbegin", loaderHTML);
  this.loaderElement = document.querySelector('.lds-ring')


  this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, (e) => {
    console.log("lOADED");
    this.loaderElement.remove()
    console.log(e.getAdData(), "---------");
    
    this.duration = e.getAdData().duration;
    this.timeDurationElement.textContent = calculateTime(this.duration);
  });

  this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, () => {
    changeClassname(this.playBtn, "fa-pause", "fa-play");
    this.playBtn.addEventListener("click", resume);
  });

  this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, (e) => {
    this.currentTime = e.getAdData().currentTime;
    this.progressBar.style.width =
      adProgressBarWidth(this.duration, this.currentTime) + "%";
    this.timeElapsedElement.textContent =
      calculateTime(this.currentTime) + " /";

    if (this.options.skip && this.skipBox) {
      var secondsToSkip =
        Math.trunc(this.currentTime - +this.options.skip) * -1;
      console.log(secondsToSkip, "--");

      if (secondsToSkip > 0) {
        this.skipBox.textContent =
          "skip in " +
          timeDesplayHelper(0, Math.abs(secondsToSkip), "skip") +
          "s";
      } else if (secondsToSkip == 0) {
        this.skipBox.textContent = "skip";
        this.skipBox.addEventListener("click", () => {
          this.adsManager.skip();
        });
      }
    }
  });
  this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {
    changeClassname(this.playBtn, "fa-play", "fa-pause");
    this.playBtn.removeEventListener("click", resume);
  });

  this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, () => {
    this.videoElement.play();
    this.skipBox.remove()
  });

  this.adsManager.addEventListener(
    google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
    () => {
      console.log("resume content");
      this.adContainer.addEventListener("click", playPauseContentFn);
      this.getContentDuration();
      this.getContentCurrentTime();
      this.playBtn.addEventListener("click", playPauseContentFn);
      this.videoElement.addEventListener("timeupdate", timeUpdateContent);
      this.progressRange.addEventListener("click", setProgress);
    }
  );

  //remove event listeners after content stops incase there are more ads
  this.adsManager.addEventListener(
    google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
    () => {
      console.log("pause content");
      this.adContainer.removeEventListener("click", playPauseContentFn);
      this.playBtn.removeEventListener("click", playPauseContentFn);
      this.videoElement.removeEventListener("timeupdate", timeUpdateContent);
      this.progressRange.removeEventListener("click", setProgress);
    }
  );

  this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, () => {
    this.videoElement.play();
    this.skipBox.remove();
  });
}

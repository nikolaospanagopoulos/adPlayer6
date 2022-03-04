import changeClassname from "../helpers/styles";

export default function adStarted() {
  changeClassname(this.playBtn, "fa-play", "fa-pause");
  const self = this;
  this.playBtn.removeEventListener("click", self.playAds);
  this.adContainer.removeEventListener("click", self.playAds);
  this.playBtn.addEventListener("click", () => this.adsManager.pause());

  if (this.options.skip) {
    this.createSkipBox();
  }
}

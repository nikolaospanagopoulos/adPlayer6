export default function createAdDisplayContainer() {
  this.adDisplayContainer = new google.ima.AdDisplayContainer(
    this.adContainer,
    this.videoElement
  );
}

export default function resize() {
  var containerHeight = this.elementToAppend?.getBoundingClientRect()?.height;
  var containerWidth = this.elementToAppend.getBoundingClientRect()?.width;
  //incase element has zero height and it waits for player to gain height, we use default aspect ration 16/9
  var aspectRatio = 16 / 9;

  var calculatedHeight = containerWidth / aspectRatio;

  var containerDimensions = {
    height: containerHeight || calculatedHeight,
    width: containerWidth,
  };

  this.parentElement.style.height = `${containerDimensions.height}px`;
  this.parentElement.style.width = `${containerDimensions.width}px`;

  this.playerWidth = containerDimensions.width;
  this.playerHeight = containerDimensions.height;
}

export default function createSkipBox() {
  this.skipBox = document.createElement("div");
  this.skipBox.classList.add("adSkipBox");
  this.parentElement.append(this.skipBox);
}

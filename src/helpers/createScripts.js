export default function createLink(url, rel) {
  var element;
  if (typeof url == "string" && typeof rel == "string") {
    element = document.createElement("link");
    element.href = url;
    document.head.append(element);
    element.rel = rel;
  }
}

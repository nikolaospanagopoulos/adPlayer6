export default function changeClassname(element, oldClassname, newClassname) {
  var DOMelement;
  if (typeof oldClassname == "string" && typeof newClassname == "string") {
    if (element instanceof Element) {
      DOMelement = element;
    } else if (typeof element == "string") {
      DOMelement = document.querySelector(element);
    }
    DOMelement.classList.remove(oldClassname);
    DOMelement.classList.add(newClassname);
  }
}

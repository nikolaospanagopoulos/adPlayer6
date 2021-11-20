export default function getDimentions(element){
    element.getBoundingClientRect()

    var dimensionsObj = {
        height:element.getBoundingClientRect().height,
        width:element.getBoundingClientRect().width,
    }



    return dimensionsObj
}
import timeDesplayHelper from "../helpers/timeDisplayHelper"

export default function calculateTime(time) {

    var minutes = Math.floor( time/ 60)
    var seconds = Math.floor( time% 60)
    var timeInfoDuration = timeDesplayHelper(minutes, seconds)
    
    return `${timeInfoDuration.convertedMinutes}:${timeInfoDuration.convertedSeconds}`
}
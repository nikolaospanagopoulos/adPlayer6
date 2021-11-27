export default function timeDesplayHelper(minutes,seconds){
    var convertedMinutes = minutes > 9 ? minutes : `0${minutes}`
    var convertedSeconds = seconds > 9 ? seconds : `0${seconds}`


    return {
        convertedMinutes,convertedSeconds
    }
}
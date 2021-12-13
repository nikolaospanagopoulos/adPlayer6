export default function timeDesplayHelper(minutes,seconds,skip){
    var convertedMinutes = minutes > 9 ? minutes : `0${minutes}`
    var convertedSeconds = seconds > 9 ? seconds : `0${seconds}`

    if(skip){
        return seconds
    }else{
        return {
            convertedMinutes,convertedSeconds
        }
    }

    
}
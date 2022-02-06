function getFormattedTime(timestamp) {
    // this method is showing how to convert a timestamp to actual time.
    return new Date(timestamp * 1000).toLocaleTimeString()
}

function getHours(timestamp) {
    return new Date(timestamp * 1000).getHours();
}

export {getFormattedTime, getHours}
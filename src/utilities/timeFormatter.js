function getFormattedTime(timestamp) {
    // this method is showing how to convert a timestamp to actual time.
    return new Date(timestamp * 1000).toLocaleTimeString()
}

function getHours(timestamp) {
    return new Date(timestamp * 1000).getHours();
}

function getDatesInShort(timestamp) {
    const fullDate = new Date(timestamp * 1000)
    const month = fullDate.getMonth() + 1; // we added 1 extra, because month starts from 0.
    const date = fullDate.getDate();
    const numberOfDay = fullDate.getDay();

    return `${date}/${month}`
}

function getNameOfDays(timestamp) {
    const numberOfDay = new Date(timestamp * 1000).getDay();
    const daysObject = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
    }
    const nameOfDay = Object.values(daysObject)[numberOfDay]
    return nameOfDay
}

export {getFormattedTime, getHours, getDatesInShort, getNameOfDays}
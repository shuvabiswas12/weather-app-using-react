export default function getWindInMPH(windInMS) {
    // this toFixed() function helps us to show the number of digits after points(.)
    // in this toFixed(1) means only one digits will show after points(.)
    // eg: 2.9
    return (windInMS * 2.24).toFixed(1)
}
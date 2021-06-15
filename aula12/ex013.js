var now = new Date()
var dayw = now.getDay()
switch(dayw) {
    case 0:
        dayw = 'Sunday'
        break
    case 1:
        dayw = 'Monday'
        break
    case 2:
        dayw = 'Tuesday'
        break
    case 3:
        dayw = 'Wednesday'
        break
    case 4:
        dayw = 'Thursday'
        break
    case 5:
        dayw = 'Friday'
        break
    case 6:
        dayw = 'Saturday'
        break
    default:
        dayw = '[ERROR] Invalid day'
}
console.log(dayw)
var now = new Date()
var time = now.getHours()
console.log(`It's ${time} hours right now.`)
if (time < 6) {
    console.log('Are you going to sleep or did you just wake up?')
} else if (time < 12) {
    console.log('Good morning!')
} else if (time <= 18) {
    console.log('Good afternoon!')
} else {
    console.log('Good night!')
}
function download(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    var ap = 'AM'
    var hour1 = hour
    if (hour >= 12){
        var hour1 = hour - 12
        var ap = 'PM'
    }
    msg.innerHTML = `Now It's ${hour1} ${ap}.`
    if (hour >= 0 && hour < 12){
        // GOOD MORNING!
        img.src = 'fotomanha.png'
        document.body.style.background = "#f8dc7a"
    } else if (hour >= 12 && hour < 18){
        // GOOD AFTERNON!
        img.src = 'fototarde.png'
        document.body.style.background = "#f8a03b"
    } else{
        // GOOD NIGHT!
        img.src = 'fotonoite.png'
        document.body.style.background = "#0c1f30"
    }
}

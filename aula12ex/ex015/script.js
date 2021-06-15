function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById("txtyear")
    var res = document.querySelector("div#res")
    if (fyear.value.length == 0 || fyear.value > year) {
        alert("[ERROR] Check the answers and try again.")
    } else {
        var fsex = document.getElementsByName("radsex")
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement("img")
        img.setAttribute("id", "image")
        if (fsex[0].checked) {
            gender = 'Man'
            if (age < 21) {
                gender = 'Boy'
            }
            if (age >= 0 && age < 5) {
                // Baby
                img.setAttribute("src", "bbm.png")
            } else if (age < 14) {
                // Child
                img.setAttribute("src", "criancam.png")
            } else if (age < 21) {
                // Teenager
                img.setAttribute("src", "jovemm.png")
            } else if (age < 65) {
                // Adult
                img.setAttribute("src", "adultom.png")
            } else {
                // Senior
                img.setAttribute("src", "idosom.png")
            }
        } else {
            gender = 'Woman'
            if (age < 21) {
                gender = 'Girl'
            }
            if (age >= 0 && age < 5) {
                // Baby
                img.setAttribute("src", "bbf.png")
            } else if (age < 14) {
                // Child
                img.setAttribute("src", "criancaf.png")
            } else if (age < 21) {
                // Teenager
                img.setAttribute("src", "jovemf.png")
            } else if (age < 65) {
                // Adult
                img.setAttribute("src", "adultof.png")
            } else {
                // Senior
                img.setAttribute("src", "idosof.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detect that it's a ${gender} with ${age} years old.`
        res.appendChild(img)
    }
}
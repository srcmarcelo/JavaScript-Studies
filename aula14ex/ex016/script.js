function count(){
    var start = document.getElementById("txtstart")
    var end = document.getElementById("txtend")
    var range = document.getElementById("txtrange")
    var res = document.getElementById("res")
    if (start.value.length == 0 || end.value.length == 0){
        res.innerHTML = "[ERROR] CANNOT COUNT"
    }else{
        if (range.value.length == 0 || range.value == 0){
            alert("Invalid range! Considering range = 1.")
            range.value = 1
        }
        res.innerHTML = `Counting: <br>`
        if (start.value < end.value){
            for (var c = Number(start.value); c <= Number(end.value); c += Number(range.value)){
                res.innerHTML += `É ${c} PAPAPA `
            }
        }else{
            for (var c = Number(start.value); c >= Number(end.value); c -= Number(range.value)){
                res.innerHTML += `É ${c} PAPAPA `
            }
        }
        res.innerHTML += "\u{1F44C}"
    }
}
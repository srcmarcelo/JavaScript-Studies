let v = []
let res = document.getElementById("res")
function add(){
    let n = document.getElementById("txtn")
    let tab = document.getElementById("table")
    let num = Number(n.value)
    if (v.indexOf(num) != -1){
        alert(`The number ${num} is already on the list.`)
    }else if (n.value.length == 0 || num < 1 || num > 100){
        alert("Invalid number.")
    }else{
        res.innerHTML = ""
        v.push(Number(n.value))
        var item = document.createElement("option")
        item.text = `Number ${num} was added.`
        tab.appendChild(item)
    }
    n.value = ''
    n.focus()
}
function show(){
    if (v.length == 0){
        alert("The list is empty. Please enter some numbers first.")
    }else{
        biger = v[0]
        smaller = v[0]
        var s = 0
        for (c2 = 0; c2 <= v.length-1; c2++){
            s += v[c2]
            if (v[c2] > biger){
                biger = v[c2]
            }
            if (v[c2] < smaller){
                smaller = v[c2]
            }
        }
        res.innerHTML = `Amount of numbers: ${v.length}<br>`
        res.innerHTML += `The biggest one: ${biger}<br>`
        res.innerHTML += `The smallest one: ${smaller}<br>`
        res.innerHTML += `Adding all numbers we have: ${s}<br>`
        res.innerHTML += `The mean between them: ${s/v.length}`
    }
}
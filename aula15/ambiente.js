let num = [5, 8, 2, 9, 3]
console.log(num)
num[5] = 4
num.push(6)
console.log(num)
num.sort()
console.log(num)
l = num.length
//var c = 0
console.log(`Length = ${l}`)
/*while (c < l){
    console.log(`Position[${c+1}] = ${num[c]}`)
    c++
}*/
for (let c in num) {
    console.log(`Position[${Number(c)+1}] = ${num[c]}`)
}
console.log(`5 is in the position number ${num.indexOf(5)}`)
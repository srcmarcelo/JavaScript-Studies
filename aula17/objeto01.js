let friend = {name: 'Fofinho',
gender: 'M',
weight: 85.5,
fatten(p=0){
    console.log('Fed up')
    this.weight += p
}}
friend.fatten(2)
console.log(`${friend.name} weighs ${friend.weight}Kg.`)

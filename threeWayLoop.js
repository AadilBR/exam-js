const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let i = 0
while (i < tab.length) {
  console.log(tab[i])
  ++i
}



let j = 0
do {
  console.log(tab[j])
  ++j
} while (j < tab.length)



for (let k = 0; k < tab.length; ++k) {
  console.log(`${tab[k]}, lenght : ${tab[k].length}`)
}


//
const myArray = ['Jidapa', 1000.00, 47, 'eiei', null];

for(const array1 of myArray){
    console.log(array1)
}

myArray.map((array2, index) => {
    console.log(`index = ${index+1} ${array2}`)
})


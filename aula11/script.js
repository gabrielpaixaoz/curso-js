/*let num = [5, 8, 4]
num[3] = 6

num[4] = 12
num.push(7)

console.log(num) */

let valores = [1, 8, 2, 4, 6, 0, 3]
/*
FORMA NÃO EFICIENTE:

console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

FORMA EFICIENTE:
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//FORMA MAIS EFICIENTE AINDA:
for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

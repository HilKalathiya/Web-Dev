let arr = [1, 2, 3, 4, 5, "Hil Kalathiya", "Chetan Gadhiya", "Sahaj Saliya"], a = [1, 2, 3, 4, 5], b = ['b', 'a', 'd', 'c', 'e']
console.log(arr)
console.log(arr.length)
// console.log(arr[0])
// arr[0]= 123
// console.log(arr[0])
console.log(arr.toString()) //this convert array into string
console.log(arr.join(''), typeof (arr.join(""))) // this is for joining array and make it a string

arr.pop()
console.log(arr)

arr.push('Sahaj Saliya')
console.log(arr) //you see

arr.shift()
console.log(arr) // you see

arr.unshift('5')
console.log(arr) // you see

delete arr[6]
console.log(arr) // you see but aama length nahi badlay te jaga par empty lakhay ne avshe

arr[6] = 'Hil'
console.log(arr)

console.log(arr.concat(a))

console.log(b.sort())

arr.splice(0, 3, 23, 42, 242, 59)
console.log(arr) // aa element ne kadhi nake che and range api hoy tema n-1 sudhi and phela be number na pachi ni vastu te add thase

console.log(arr.slice(4))
// aa 4 number na index this array ne split kari dese
console.log(arr.slice(3,7))
// to aa index 3 to 6 ni navi array slice kari ne apse

console.log(arr.reverse())

let userString = prompt("Введите текст для обрезки").trim()

let startSliceIndex = Number(prompt("Введите индекс, с которого нужно начать обрезку строки"))


let endSliceIndex = Number(prompt("Введите индекс, которым нужно закончить обрезку строки"))

let resultString = userString.slice(startSliceIndex, endSliceIndex)

alert(`Результат: ${resultString}`)

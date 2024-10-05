
let userText = prompt("Введите текст").trim()

let wordFromText = prompt("Введите слово из текста").trim()

let indexOfWord = userText.indexOf(wordFromText)

let resultString1 = userText.slice(0, indexOfWord)

alert(`Результат: ${resultString1}`)

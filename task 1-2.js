//Задание 1

    const myName1 = "Sam"
    const programmingLanguage1 = "JavaScript"
    const courseCreatorName = "Result-university"
    const reasonText = "хочу сменить работу"
    const numberOfMonth = 1

    const message = `Всем привет! Меня зовут ${myName1}. Сейчас я изучаю язык программирования ${programmingLanguage1} на курсе по ${programmingLanguage1} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage1} ${numberOfMonth} месяцев(а). Я уверен, что пройду данный курс до конца!`

    console.log(message)

//Задание 2

    let myInfoText = message

    myInfoText = myInfoText.replaceAll("JavaScript", "javascript")
    myInfoText = myInfoText.replaceAll("курс", "КУРС")
    console.log(myInfoText)
    console.log(myInfoText.length)
    console.log(myInfoText[0])
    console.log(myInfoText[myInfoText.length - 1])
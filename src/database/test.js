const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db)=> {
    //Inserir dados
    proffyValue = {
        name: "Ricarda Rilat",
        avatar:"https://media-exp1.licdn.com/dms/image/C5603AQGK775mhNcnnQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=_22Lz6pay0OMTrZq-XXbtoJrH0PAvt8bSZ3THVokRAI",
        whatsapp: "326323735523", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject:"1", 
        cost:"40", 
        // o proffy id virá do banco de dados
    }

    classScheduleValues = [
        // class id vira pelo banco de dados, apos cadastrar a class
        {
            weekday:1,
            time_from: 720,
            time_to:1220
         },
         {
            weekday:0,
            time_from: 520,
            time_to:1220
            }
        ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})


    // consultar dados inseridos
    //Todos os proffys
   const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

        //consultar as classes de um determinado professor
        // e trazer junto os dados do professor

        const selectClassesAndProffys = await db.all (`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
        `)
       // console.log(selectClassesAndProffys)

        // o horario que a pessoa trabalha: 8h-18h
        //se o horario do time_from (8h) precisa ser antes ou igual ao horario solicitado e o timer_to precisa ser acima

        const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "1300"
            AND class_schedule.time_to > "1300"
        `)
        console.log(selectClassesSchedules)
})
// DADOS
const proffys = [
    {name: "Ricarda Rilat",
    avatar:"https://media-exp1.licdn.com/dms/image/C5603AQGK775mhNcnnQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=_22Lz6pay0OMTrZq-XXbtoJrH0PAvt8bSZ3THVokRAI",
    whatsapp: "326323735523", 
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject:"Química", 
    cost:"40", 
    weekday: [0], 
    time_from:[720] , 
    time_to:[1220]
    },

    {name: "João Garcia",
    avatar:"https://avatars2.githubusercontent.com/u/64910867?s=460&u=dde86a052ce7829deb9efaaba2d5ec4c0c6814e0&v=4",
    whatsapp: "326323735523", 
    bio:'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
    subject:"Química", 
    cost:"40", 
    weekday: [1], 
    time_from:[720] , 
    time_to:[1220]
    },

    {name: "Marcos Corrêa",
    avatar:"https://avatars0.githubusercontent.com/u/40653742?s=460&u=763b64a8a74219ced2e2e5a97d6201dfc6b26491&v=4",
    whatsapp: "326323735523", 
    bio:'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
    subject:"Química", 
    cost:"40", 
    weekday: [1], 
    time_from:[720] , 
    time_to:[1220]
    }
]

const subjects =[
    "Kunst",
    "Biologie",   
   "Wissenschaften",
   "Physikalische Bildung",
   "Physik",
   "Geographie",
   "Geschichte",
   "Mathematik",
    "Deutsch",
    "Chemie",
]

const weekdays = [
    "Sonntag",
    "Montag",
    "Dienstag",
   "Mittwoch",
   "Donnerstag",
    "Freitag",
    "Samstag",
]

// FUNCIONALIDADES

function getSubject (subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req, res) {
    const data = req.query

    // se tiver dados adicionar
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty) {

        data.subject =  getSubject(data.subject)

     // adicionar data a lista de proffys   
        proffys.push(data)

        return res.redirect("/study")
    }
    
    // se nao, mostrar a pagina
    return res.render("give-classes.html",{ subjects, weekdays })
}

// SERVIDOR
const express = require ('express')
const server = express ()

// configurar nunjucks (TEMPLATE ENGINE)
const nunjucks = require('nunjucks')
nunjucks.configure ('src/views',{
    express: server,
    noCache: true,
})

// INICIO E CONFI SERVIDOR
server
// configurar arquivos estáticos (css, script, imagens)
.use(express.static("public"))
// rotas da aplicaçao
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
// START DO SERVIDOR
.listen(5500) 


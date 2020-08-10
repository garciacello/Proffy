
// SERVIDOR
const express = require ('express')
const server = express ()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configurar nunjucks (TEMPLATE ENGINE)
const nunjucks = require('nunjucks')
nunjucks.configure ('src/views',{
    express: server,
    noCache: true,
})

// INICIO E CONFI SERVIDOR
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))

// configurar arquivos estáticos (css, script, imagens)
.use(express.static("public"))
// rotas da aplicaçao
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// START DO SERVIDOR
.listen(5500) 


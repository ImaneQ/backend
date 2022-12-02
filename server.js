// const http pour créer un serveur, package http fait parti de node
const http = require('http')

// méthode createServer du package http prend comme argument 
// req et res arguments de la fonction appelés à chaque requête 
const server = http.createServer((req,res)=>{
    res.end('voila la reponse du serveur ')
})

// par défaut on utilise port 3000 mais si
// pas dispo on utilise la variable process.env.port
server.listen(process.env.port || 3000)
// on va utiliser postman pour tester les requetes 
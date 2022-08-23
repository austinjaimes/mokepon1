const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hola Mundo")
})

app.listen(8080, () => {
    console.log("La aplicacion se ha iniciado")
})

//"Nuestro Código está hecho de la siguiente manera:

// Importamos ExpressJS para usarlo en nuestro Proyecto
// Creamos una Aplicación con ExpressJS
// Le decimos a Express que cuando la URL raíz reciba una petición, responda “Hola”
// Le decimos que escuche continuamente en el puerto 8080 las peticiones de los clientes para que todo el tiempo pueda responderles
// Y LISTO! Ya creaste Tu Primer Hola Mundo Con Node y ExpressJS 
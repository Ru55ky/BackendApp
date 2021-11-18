const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000
const todoRoutes = require('./routes/todos')
const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))

app.use(todoRoutes)

async function start() {
    try {
await mongoose.connect('mongodb+srv://Mikhail-Dobatkin:PH15ju74Vi23@cluster0.jv8vk.mongodb.net/testDev', {
    useNewUrlParser: true
})
    app.listen(PORT, () => {
        console.log('Server has been started...')
        })
    } catch (e) {
        const err = new Error(e)
        console.log('Произошла ошибка:', err)
    }
}

start().catch(console.log)

const express = require('express')
const mongoose = require('mongoose')
const Movie = require('./models/add_movie')
const PathRouter = require('./routes/paths')
const app = express()

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {

    console.log("started");
    const movie = await Movie.find()
    //res.render('articles/index', { articles: articles })

    res.render('index',{movie:movie});

})

app.use('/paths', PathRouter)

app.listen(5000)
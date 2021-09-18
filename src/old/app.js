const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
// Define paths for Express config
const publicdirpath  = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') 
const partialsPath = path.join(__dirname , '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicdirpath))

app.get('' ,(req, res) =>{
    res.render('index', {
          title : 'Weather App',
          name : 'Suheir El Omari'
    })
})

app.get('/about' ,(req,res)=>{

    res.render('about', {
            title : 'About Title',
            name :  'Suheir'})   
    })

app.get('/help', (req,res)=>{
    res.render('help',{
           title  : 'HELP TITLE',
           name : 'HELP NAME'
    
    })
})

app.get('/weather' ,(require, res)=>{
    res.send('The weather is nice today')
})
// app.get('/help/*', (req, res)=>{
//     res.render('404', {
//         title: '404',
//         name: 'Suheir',
//         errorMsg: 'Help articlenot found'
//     } )
// }) 
app.listen(3000, () => {
    console.log('server is up on port 3000')
})


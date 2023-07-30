
const express = require('express')
const app = express()
const port = process.env.port||3000

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})
//app.get('/about', (req, res) => {
//    res.send('this is data in about bage')
//  })

 // app.get('/service', (req, res) => {
 //   res.send('this is data in service page')
 // })
  const path = require('path')
/////////////////////////////////////////////////////////////////////

app.set('view engine', 'hbs');
const viewsDirectory = path.join (__dirname , "../temp1/views" )
      app.set( "views" , viewsDirectory)



      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp1/partials")

      hbs.registerPartials(partialsPath)




      app.get('/' , (req , res) => {
        res.render('index' , {
            title: "HOME",
            desc : "Welcome to my weather app"
        })
    })

app.get('/Weather' , (req,res)=>{
      res.render('Weather' , {
        country: "Egypt",
        latitude: "27.56574543",
        logitude:"29.42038543",
        weather:"rainy",
        temperature:"20"
        
      })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

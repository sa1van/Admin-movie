const express = require('express')
const Movie = require('./../models/add_movie')
const router = express.Router()

router.get('/new', (req, res) => {

    console.log("new movie here ");
    res.render('new', { movie: new Movie() })
})


router.get('/moviepurchase', (req, res) => {

    let mv=new Movie;
    mv.name=req.body.name;
    mv.starttime=req.body.starttime;
    mv.endtime=req.body.endtime;
    mv.totaltickets=req.body.ticketnumber;
    Movie.findOne({ name: mv.name}, function (err, docs) { 
        if (err){ 
            //console.log(err); 
            res.send(err);
        } 
        else{ 

            if(docs.totaltickets<mv.totaltickets)
            {
                res.send("not possible");
            }
            
            console.log(docs.name+"fdafsdfsdfsd");
           
            docs.totaltickets=docs.totaltickets-mv.totaltickets;
            
            docs.save(function (err,obj) {
                if(err) {
                    console.error('ERROR!');
                }
            });
            

        } 
    });


})

router.post('/addnew', (req, res) => {

    console.log("adding new here");
    let mv=new Movie;
    mv.name=req.body.name;
    mv.starttime=req.body.time;
    mv.endtime=req.body.endtime;
    mv.ticketprice=req.body.ticketprice;
    mv.totaltickets=req.body.totaltickets;
    

    Movie.findOne({ name: mv.name}, function (err, docs) { 
        if (err){ 
            //console.log(err); 
            res.send(err);
        } 
        else{ 
            
            console.log(docs.name+"fdafsdfsdfsd");
            docs.starttime=mv.starttime;
            docs.endtime=mv.endtime;
            docs.ticketprice=mv.ticketprice;
            docs.totaltickets=mv.totaltickets;
            
            docs.save(function (err,obj) {
                if(err) {
                    console.error('ERROR!');
                }
            });
            

        } 
    }); 

})

function cc(mv)
{
    mv.save(function (err, res) {
        if (err) return console.error(err);
        console.log(res+ " saved ");
      });
}

router.post('/', (req, res) => {

    let mv=new Movie;
    mv.name=req.body.name;
    mv.description=req.body.description;
    mv.direction=req.body.direction;
    mv.duration=req.body.duration;


    cc(mv);
    //mv.save(function (err, book) {
    //    if (err) return console.error(err);
    //    console.log(mv.name + " saved ");
    //  });

      //Movie.findAll()
      //.then((res)=>{
        
      //  res.render('index',{movie:res});
      //})

})

module.exports = router

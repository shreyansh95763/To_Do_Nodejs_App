const express = require('express');
const path = require('path');
const port = 7000;
const app = express();

      // access the mongoose file of config folder for the database connection
const db = require('./config/mongoose');
            // Access the todo file that was created the schema
const Works = require('./models/todo')

            // Create the ejs engine and give the path
app.set('view engine','ejs');
app.set('views','./views');
                // Access the assets folder that have css and js files(middleware)
app.use(express.static('assets'));
                // another middleware that was for the form 
app.use(express.urlencoded());

                    // for the displaying the todo list
app.get('/',function(req,res){

    Works.find({},)
    .then((todo) => {
        return res.render('home',{
            title : "To-do Application",
            Contact_list : todo
         })
    })
    .catch((err) =>{
        console.log("Getting the err to fatch the server ");
            return;
    })

});

                 // Create the todo list

app.post('/create-content',function(req,res){

    Works.create({
        Description: req.body.Discription,
        Category : req.body.Category,
        Date : req.body.Date,
    },)
    .then((newWorks) => { console.log('************',newWorks);return res.redirect('back')})
    .catch((err) =>{ console.log("Getting the error in creating works"); return})
})

                      // Delete of the todo lists
app.get('/delete-to-do/',function(req,res){
    let check = req.query.check;
    if(!check){
        return res.redirect('back');
    }
    var obj = JSON.parse(check);
    let id = obj.id;
    console.log(id);

    //find the contact using id and delete
    Works.findByIdAndDelete(id,)
    .then(()=> {return res.redirect('back')})
    .catch((err) => {console.log(err,"Getting error to deleting the contact ");return})

}
);

                // creating the server
app.listen(port,function(err){
    if(err){
        console.log(`Error is getting on the server ${err}`);
        return;
    }
    console.log(`your server is running perfectly on the Port NO. ${port}`);
})
const axios = require('axios'); //requires axios package which autofills things


exports.homeRoutes = (req, res) => { //makes a get request to /api/users
    axios.get('http://localhost:4000/api/users') //calls the /api/users page
        .then(function(response){
            res.render('index', { users : response.data }); //renders the reponse function
        })
        .catch(err =>{
            res.send(err); //sends error message if error occurs
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{ 
    axios.get('http://localhost:4000/api/users', { params : { LastName : req.query.LastName }}) //gets specific entry from the database based on last name
        .then(function(userdata){
            res.render("update_user", { user : userdata.data}) //renders the userdata function
        })
        .catch(err =>{
            res.send(err); //sends error message if error occurs
        })
}
var movierentaltracker = require('../model/model'); //refers to model.js for information

//add and save a new entry
exports.create = (req, res) => {
    if(!req.body){ //all data is stored in the 'body' object
        res.status(404).send({message: "An error occured."}); //send the user this message if theres an error
        return;
    }

    const entry = new movierentaltracker({ //adds a new entry to the database
        FirstName: req.body.FirstName, //must be formatted in this way
        LastName: req.body.LastName,
        MovieTitle: req.body.MovieTitle,
        DateRented: req.body.DateRented,
        DateReturned: req.body.DateReturned,
        RentalFee: req.body.RentalFee

    })

    entry //saving the newly created entry
        .save(entry)
        .then(data => {
            res.redirect('/home'); //redirects to home page after entry is added and saved
        })
        .catch(err =>{
            res.status(404).send({
                message : err.message || "An error occurred while creating a new entry" //error message if error occurs
            });
        });

}

//find a single entry
exports.find = (req, res) => { 
    if(req.query.LastName){ //finda a single entry by looking through last names
        const LastName = req.query.LastName;

        Userdb.findByLastName(LastName) //method to find entries by last name
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Error searching for user with Last Name: "+ LastName}) //error when finding user
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(404).send({ message: "Error retrieving user with Last Name " + LastName}) //error when retreiving user
            })

    }else{
        movierentaltracker.find() //uses find method to get user
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" }) //error handling
            })
    }
}

//update existing entry
exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(404)
            .send({ message : "Data to update can not be empty"}) //error occurs when field is empty
    }

    const lastname = req.params.LastName; //finds the last name in the body of the database in order to edit that entry
    movierentaltracker.updatebylastname(LastName, req.body, { useFindAndModify: false}) //method to find and edit an entry by last name
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${LastName}`}) //error when Last Name might be wrong
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(404).send({ message : "Error Update user information"})
        })
}

//delete existing entry
exports.delete = (req, res) => {
    const LastName = req.params.LastName; //finds the last name in the body of the database in order to delete that entry

    Userdb.deletebylastname(LastName) //method created to delete by last name
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with Last Name ${LastName}.`}) //error when last name might be wrong
            }else{
                res.send({
                    message : "Entry was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(404).send({
                message: "Could not delete User with Last Name " + LastName //error if program cannot delete entry
            });
        });
}
    

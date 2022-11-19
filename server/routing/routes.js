const express = require('express'); //requires express
const route = express.Router();

const controller = require('../controller/controller'); //requires the controller.js file

route.get('/', (req, res)=>{
    res.render('index.ejs');
})
route.get('/add-user', (req, res)=>{ //routes to the new_user.ejs file when /add-user is typed in the search bar
    res.render('new_user.ejs');
})
route.get('/home', (req, res)=>{ //routes to the index.ejs file when /home is typed in the search bar
    res.render('index.ejs');
})
route.get('/public', (req, res)=>{ //routes to the index.ejs file when /public is typed in the search bar
    res.render('index.ejs');
})
route.get('/update-user', (req, res)=>{ //routes to the update_user.ejs file when /update-user is typed in the search bar
    res.render('update_user.ejs');
})

//API Code
route.post('/api/users', controller.create); //post request to post new entry
route.get('/api/users', controller.find); //get request to find an entry
route.put('/api/users/:LastName', controller.update); //put request to update an entry (specifies value to LastName parameter)
route.delete('/api/users/:LastName', controller.delete); //delete request to delete an entry (specifies value to LastName parameter)

module.exports = route //exports the route
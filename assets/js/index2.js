$("#add_user").submit(function(event){
    alert("New Entry Has Been Succesfully Added!"); //sends alert saying that a new entry has been successfully added 
})

$("#update_user").submit(function(event){
    alert("Entry has Been Successfully Edited!"); //sends alert saying that a new entry has been successfully edited
})

if(window.location.pathname == "/"){ //code for deleting an entry
    $onDelete = $(".table tbody td a.delete"); //deletes the table, table body, table data etc.
    $onDelete.click(function() {
        var LastName = $(this).attribute("data-LastName")

        var request = {
            "url": `http://localhost:4000/api/users/${data.LastName}`, //refers to the delete route of the website to delete the entry
            "method":"DELETE", //this is a delete request
        }

        if(confirm("Are You Sure You Want to Delete this Entry?")){ //asks the user if they are sure they want to delete the entry
            $.ajax(request).done(function(response) {
                alert("You Have Now Deleted this Entry"); //alerts the user that the entry has been deleted successfuly
                location.reload(); //reloads the page after deleted successfully
            })
        }
    })
}


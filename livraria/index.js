const db = require("./database/models");

db.Livro.findAll().then((data) =>{
    data.forEach((linha)=>{
        console.log(data);
    })
})


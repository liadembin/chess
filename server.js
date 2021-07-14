const response = require('express');
const express = require('express');
const app = express();
const storedata = require('nedb');
const database = new storedata('database.db');
database.loadDatabase();
console.log("correct")
app.listen(3000);
console.log("saves");
app.use(express.static('fil'));
app.use(express.json({ limit:'20mb' }));
console.log("right");

app.get('/api', (req, res) => {
    console.log("connecred to someone ' sending ");
    try {
        data = database.getAllData()
    }
    catch (erro) {
        console.log("oops");
        console.log(erro);
        data = { usernameval:"username" ,mailval:""}
    }
    
    console.log(data);
    res.send(data);
    console.log("sent");
});
app.post('/api', (request, response) => {
    console.log("igot apost request to insert")
    console.log(request.body);
    if (request.body != {} && request.body != []) {

    console.log("inserting")
    database.insert({ val: request.body })
    response.json(request.body)
    }


});

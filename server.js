const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 8001;
// var expressLayouts = require('express-ejs-layouts');
app.use(express.static(__dirname  + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.set('view engine', 'ejs');


/**
 * VARIABLES
 */
//read mods database
let mods = [];

fs.readFile('./mods_db.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    mods = JSON.parse(data);
})

//read flavors db
let flavors = [];

fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    flavors = JSON.parse(data);
})

//read house db
let house = [];

fs.readFile('./house.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    house = JSON.parse(data);
})

//read tanks db
let tanks = [];

fs.readFile('./tanks_db.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    tanks = JSON.parse(data);
})

//read premium db
let premium = [];

fs.readFile('./premium.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    premium = JSON.parse(data);
})

//starterkits db
let starterkits = [];

fs.readFile('./starterkits.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    starterkits = JSON.parse(data);
})

//read batteries db
let batteries = [];

fs.readFile('./batteries.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    batteries = JSON.parse(data);
})

//get JSON file
app.get('/test', function (req, res) {
    //file path
    var filePath = 'customers.json';
    //try catch block
    try {
        //check whether file exists or not
        if (fs.existsSync(filePath)) {

            //file exists
            fs.readFile(filePath, function (err, data) {
                //if any error display error
            })
        } else {
            console.log('file does not exist');
        }
    } catch (err) {
        console.log(err)
    }
    // res.json({
    //     key: 'value',
    //     name: 'Frankie',
    //     age: 20,
    //     food: {
    //         favorite: ['pasta', 'pizza', 'mac n cheese', 'FIVEEEEE GUYSSSSSSSSSSS'],
    //         leastFavorite: 'idk'
    //     }
    // })
    
})

//request db
//flavors
app.get('/flavors', (req, res) => {
    res.json(flavors);
})

//mods
app.get('/mods', (req, res) => {
    res.json(mods);
})

//tanks
app.get('/tanks', (req, res) => {
    res.json(tanks);
})

//Premium flavors
app.get('/premium', (req, res) => {
    res.json(premium);
})

//house flavors
app.get('/house', (req, res) => {
    res.json(house);
})

//starter kits
app.get('/starterkits', (req, res) => {
    res.json(starterkits);
})

//batteries
app.get('/batteries', (req, res) => {
    res.json(batteries);
})

app.get('/:filename', (req, res, next) => {
    const filename = '/' + req.params.filename;

    // check to see if that page exists
    fs.readFile(filename, (err, page) => {
        if (err) {
            return next();
        }
        res.send(page)
    })
})

app.get('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(PORT, function () {
    //display message on console

    console.log('Server up: http://localhost:' + PORT);
});
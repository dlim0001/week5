//nodemon 1.npm install -g nodemon
let express = require('express');
let app = express();
let bodyParser=require('body-parser'); //npm install body-parser
app.use(express.static('css')) //css (background colour)
app.use(express.static('views'))

let viewsPath = __dirname+"/views/"; //__dirname is current path + views the folder

let db=[];

app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");

app.get('/',function(req,res){
    res.sendFile(viewsPath+"index.html");
});

app.use(bodyParser.urlencoded({extended:false}));

app.get('/addtask',function(req,res){
    res.sendFile(viewsPath+"addtask.html");
});

app.post('/addthistask',function(req,res){
    console.log(req.body);
    db.push(req.body);
    res.render(viewsPath + "alltasks.html",{
        task: db
    });
});

app.get('/alltasks',function(req,res){
    res.render(viewsPath + "alltasks.html",{
            task: db
    });
        
});



app.listen(8080);

//git init
//make file .gitignore to include files git should ignore

//to do
//fix image display, change to string (task due date)
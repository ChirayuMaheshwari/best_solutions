var exp = require("express")   

//require is used ot load a module ,express module is the module to develop web application in node js
var app = exp()
var mysql = require("mysql")
var body_parser = require("body-parser") 

//to send variables  on jsp page
app.use(body_parser.urlencoded({ extended: false })) 
console.log("hellO")
//using it as a middleware -->app.use is being used as a middleware

app.use(exp.static(__dirname + '/views')); 

//middlewere to load static files 
app.set("view engine", "ejs");
var list = { host: "127.0.0.1", user: "root", password: "", database: "best_solutions" }
var db = mysql.createConnection(list)
db.connect(function (err) {
    if (err)
        throw err
    else
        console.log("connection established")
})
var result_ans="";
app.get("/", function (req, res) {
    var hello="this is hello";
    
    
        db.query("select * from doctor_data",function(err,result1){
        if(err)
        {
            throw err;
        }
        else
        {   
            var i;
            
            for(i=0;i<result1.length;i++)
            {
                result1[i].doctor_id=result1[i].doctor_id+".jpg"
            }
            
           do_operation(result1)
            
        }
        
    })

    
    function do_operation(result1)
    { 
        db.query("select * from product_data",function(err,result2){
            if(err)
            {
                throw err;
            }
            else
            {   
                var i;
                
                for(i=0;i<result2.length;i++)
                {
                    result2[i].product_id=result2[i].product_id+".jpg"
                }
                
               do_operation2(result1,result2)
                
            }
            
        })
    }
    function do_operation2(result1,result2)
    {
    console.log(result1)
    res.render(__dirname + "/views/" + "user_page.ejs",{result1:result1,result2:result2})
    }
    
}).listen(8080)
app.get("/consult",function(req,res){
    var hello="this is hello";
    
    
        db.query("select * from doctor_data",function(err,result1){
        if(err)
        {
            throw err;
        }
        else
        {   
            var i;
            
            for(i=0;i<result1.length;i++)
            {
                result1[i].doctor_id=result1[i].doctor_id+".jpg"
            }
            
           do_operation(result1)
            
        }
        
    })

    
    function do_operation(result1)
    { 
        db.query("select * from product_data",function(err,result2){
            if(err)
            {
                throw err;
            }
            else
            {   
                var i;
                
                for(i=0;i<result2.length;i++)
                {
                    result2[i].product_id=result2[i].product_id+".jpg"
                }
                
               do_operation2(result1,result2)
                
            }
            
        })
    }
    function do_operation2(result1,result2)
    {
    console.log(result1)
    res.render(__dirname + "/views/" + "consult.ejs",{result1:result1,result2:result2})
    }
})
app.post("/input_data",function(req,res){
    var first_name=req.body.first_name;
    var last_name=req.body.last_name;
    var phone=req.body.phone;
    var email=req.body.email;
    var date=req.body.date;
    var slot=req.body.slot;
    var gender=req.body.gender;
    var bdate=req.body.bdate;
    var problem_statement=req.body.problem_statement;
    console.log(bdate)
    console.log(gender)
    console.log(first_name)
    console.log(last_name)
    console.log(phone)
    console.log(email)
    console.log(date)
    console.log(slot)
    console.log(problem_statement)
    var hello="this is hello";
    
    
    db.query("select * from doctor_data",function(err,result1){
    if(err)
    {
        throw err;
    }
    else
    {   
        var i;
        
        for(i=0;i<result1.length;i++)
        {
            result1[i].doctor_id=result1[i].doctor_id+".jpg"
        }
        
       do_operation(result1)
        
    }
    
})


function do_operation(result1)
{ 
    db.query("select * from product_data",function(err,result2){
        if(err)
        {
            throw err;
        }
        else
        {   
            var i;
            
            for(i=0;i<result2.length;i++)
            {
                result2[i].product_id=result2[i].product_id+".jpg"
            }
            
           do_operation2(result1,result2)
            
        }
        
    })
}
function do_operation2(result1,result2)
{
//console.log(result1)
console.log(first_name)
res.render(__dirname + "/views/" + "data.ejs",{first_name:first_name,last_name:last_name,email:email,date:date,slot:slot,problem_statement:problem_statement,phone:phone,result1:result1,result2:result2,gender:gender,bdate:bdate})
}
})
app.get("/final",function(req,res){
    var hello="this is hello";
    
    
    db.query("select * from doctor_data",function(err,result1){
    if(err)
    {
        throw err;
    }
    else
    {   
        var i;
        
        for(i=0;i<result1.length;i++)
        {
            result1[i].doctor_id=result1[i].doctor_id+".jpg"
        }
        
       do_operation(result1)
        
    }
    
})


function do_operation(result1)
{ 
    db.query("select * from product_data",function(err,result2){
        if(err)
        {
            throw err;
        }
        else
        {   
            var i;
            
            for(i=0;i<result2.length;i++)
            {
                result2[i].product_id=result2[i].product_id+".jpg"
            }
            
           do_operation2(result1,result2)
            
        }
        
    })
}
function do_operation2(result1,result2)
{
console.log(result1)
res.render(__dirname + "/views/" + "final.ejs",{result1:result1,result2:result2})
}
})
app.get("/disease",function(req,res){

    var hello="this is hello";
    
    
    db.query("select * from doctor_data",function(err,result1){
    if(err)
    {
        throw err;
    }
    else
    {   
        var i;
        
        for(i=0;i<result1.length;i++)
        {
            result1[i].doctor_id=result1[i].doctor_id+".jpg"
        }
        
       do_operation(result1)
        
    }
    
})


function do_operation(result1)
{ 
    db.query("select * from product_data",function(err,result2){
        if(err)
        {
            throw err;
        }
        else
        {   
            var i;
            
            for(i=0;i<result2.length;i++)
            {
                result2[i].product_id=result2[i].product_id+".jpg"
            }
            
           do_operation2(result1,result2)
            
        }
        
    })
}
function do_operation2(result1,result2)
{
console.log(result1)
res.render(__dirname + "/views/" + "disease.ejs",{result1:result1,result2:result2})
}
})

//to set ejs templates

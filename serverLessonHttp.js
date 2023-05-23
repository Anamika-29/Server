const express = require("express");
let fs = require("fs");

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header(
"Access-Control-Allow-Headers",
"GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
);
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept"
);
next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let baseURL = "https://repo-8qu2.onrender.com/studentServer/";

let axios = require("axios");

let fname = "file.json";

function addRequest(method,url,body){
    let newRequest = {method:method,url:`localhost:2410${url}`,body:body};
    fs.promises.readFile("file.json","utf8")
    .then((data)=>{
        let obj = JSON.parse(data);
        obj.push(newRequest);
        let data1 = JSON.stringify(obj);
        fs.promises.writeFile("file.json",data1)
        .then(() => console.log("New Request"));
    })
    .catch((err)=>console.log(err));

}

app.get("/testServer/getToken",function(req,res){
    addRequest("GET","/testServer/getToken",null);

    axios.get(baseURL+"/getToken")
    .then(function(response){
        
        console.log(response.data);
        res.send(""+response.data);
    })
    .catch(function(error){
        if(error.response){
            let{status,statusText} = error.response;
            console.log(status, statusText);
            res.status(status).send(statusText);       
        }
        else res.status(404).send(error);
    });
})


app.get("/testServer/students",function(req,res){
    addRequest("GET","/testServer/students",null);
    let token = req.header("authorization") || "dummyvalue";
    axios.get(baseURL+"/students",{headers: {authorization : token}})
    .then(function(response){

        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(error){
        if(error.response){
            let{status,statusText} = error.response;
            console.log(status, statusText);
            res.status(status).send(statusText);       
        }
        else res.status(404).send(error);
    });
});

app.get("/testServer/students/:id",function(req,res){
    addRequest("GET","/testServer/students/:id",null);
    let token = req.header("authorization") || "dummyvalue";
    let {id} = req.params;
    axios.get(`${baseURL}/students/${id}`,{headers: {authorization : token}})
    .then(function(response){

        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(error){
        if(error.response){
            let{status,statusText} = error.response;
            console.log(status, statusText);
            res.status(status).send(statusText);       
        }
        else res.status(404).send(error);
    });
});

app.get("/testServer/students/course/:name",function(req,res){
    addRequest("GET","/testServer/students/course/:name",null);

    let token = req.header("authorization") || "dummyvalue";
    let {name} = req.params;
    axios.get(`${baseURL}/students/course/${name}`,{headers: {authorization : token}})
    .then(function(response){

        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(error){
        if(error.response){
            let{status,statusText} = error.response;
            console.log(status, statusText);
            res.status(status).send(statusText);       
        }
        else res.status(404).send(error);
    });
})

app.post("/testServer/students",function(req,res){
    addRequest("POST","/testServer/students",req.body);

    let token = req.header("authorization");
    if(!token)
    res.status(401).send("No token found. Provide a valid token");
    else{
        let body = req.body;

    axios.post(baseURL+"/students",body,{headers: {authorization : token}})
    .then(function(response){

        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(error){
        if(error.response){
            let{status,statusText} = error.response;
            console.log(status, statusText);
            res.status(status).send(statusText);       
        }
        else res.status(404).send(error);
    });
}
})

app.put("/testServer/students/:id",function(req,res){
    addRequest("PUT","/testServer/students/:id",req.body);

    let token = req.header("authorization");
    let {id} = req.params;

    if(!token)
    res.status(401).send("No token found. Provide a valid token");
    else{
        let body = req.body;
    axios.put(`${baseURL}/students/${id}`,body,{headers: {authorization : token}})
    .then(function(response){

        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(error){
        if(error.response){
            let{status,statusText} = error.response;
            console.log(status, statusText);
            res.status(status).send(statusText);       
        }
        else res.status(404).send(error);
    });
}
})


app.delete("/testServer/students/:id",function(req,res){
    addRequest("DELETE","/testServer/students/:id",null);

    let token = req.header("authorization");
    let {id} = req.params;

    if(!token)
    res.status(401).send("No token found. Provide a valid token");
    else{
        let body = req.body;
    axios.delete(`${baseURL}/students/${id}`,{headers: {authorization : token}})
    .then(function(response){

        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(error){
        if(error.response){
            let{status,statusText} = error.response;
            console.log(status, statusText);
            res.status(status).send(statusText);       
        }
        else res.status(404).send(error);
    });
}
})


app.get("/testServer/allRequests",function(req,res){

    fs.promises.readFile(fname,"utf8")
    .then((data)=>{
        console.log("In string format:",data);
        let obj = JSON.parse(data);
        res.send(obj);
    })
    .catch((err)=>console.log(err));
});

app.get("/allRequests/:method",function(req,res){
    let {method} = req.params;

    fs.promises.readFile(fname,"utf8")
    .then((data)=>{
        console.log("In string format:",data);
        let obj = JSON.parse(data);
        console.log(data);
        let arr = obj.filter(ele=>ele.method===method);

        res.send(arr);
    })
    .catch((err)=>console.log(err));
});

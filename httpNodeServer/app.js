// const http = require("http");
// const fs = require("fs");


//For HTML
// const server = http.createServer((req, res) => {
//    const readStream = fs.createReadStream("./static/index.html");
//    res.writeHead(200, { "Content-type": "text/html" });
//    readStream.pipe(res);

// })

//For JSOn
// const server = http.createServer((req, res) => {
//     const readStream = fs.createReadStream("./static/example.json");
//     res.writeHead(200, { "Content-type": "application/json" });
//     readStream.pipe(res);
 
//  })


 //For Image
//  const server = http.createServer((req, res) => {
//     const readStream = fs.createReadStream("./static/facebook.png");
//     res.writeHead(200, { "Content-type": "image/png" });
//     readStream.pipe(res);
 
//  })

// server.listen(3000)

// let _ = require("lodash");
// let example = _.fill([1,2,3,4,5], "banana", 1, 4);
// console.log(example);

// import express from "express";
// import path from "path";
// import Joi from "joi";

// import { fileURLToPath } from "url";

// // Derive the __dirname equivalent using import.meta.url
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.use("/public", express.static(path.join(__dirname, "static")));
// app.use((req,res, next)=>{
//     console.log(req.url, req.method);
//     req.banana = "banana";
//     console.log("Hello");
//     next();
// });
// app.use(express.urlencoded({ extended: false }));
// app.get("/", (req, res) => {
//     // console.log(req.params);
//     // console.log(req.query);
//     // res.send("Hello World");
//     console.log("Hello banana",req.banana);
    
    
//     res.sendFile(path.join(__dirname, "static", "index.html"));
// })

// // app.post("/", (req, res) => {
// //    const schema = Joi.object({
// //          email: Joi.string().email().required(),
// //          password: Joi.string().min(5).max(10).required(),
// //    });
// //    const {error, value} = schema.validate(req.body);
// //    if(error){
// //     return res.send("An error occurred: " + error.details[0].message);
// //    }

// //    console.log(value); // The validated data
// //    res.send("Data posted successfully");
// // })
// app.listen(3000, ()=>{
//     console.log("Server is running on port 3000");
    
// });


import express from "express";
import userRouter from "./routes/userRoute.js";
const app = express();

app.use(express.json());
app.use((req, res, next) => {   
    console.log(req.url, req.method);
    console.log("middleware");
    next();
    
});
app.use("/users", userRouter);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    
});
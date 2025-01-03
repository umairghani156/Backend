const fs = require("fs");

// fs.writeFile("example.txt", "This is an example",(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log("File successfully created");
//         fs.readFile("example.txt", "utf8",(err, file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
                
//         })
//     }
        
// })

// fs.rename("example.txt","example2.txt",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("File successfully renamed");
        
        
// })

// fs.appendFile("example2.txt","\nThis is a new line",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("File successfully appended");
        
        
// })

fs.unlink("example2.txt",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("File successfully deleted");
        
})
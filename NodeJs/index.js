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

// fs.unlink("example2.txt",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("File successfully deleted");
        
// })

// fs.mkdir("folder", (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log("Folder successfully created");
//         // fs.rmdir("folder", (err)=>{
//         //     if(err)
//         //         console.log(err);
//         //     else
//         //         console.log("Folder successfully deleted");
//         // })
//         fs.writeFile("./folder/example.txt", "This is an example",(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log("File successfully created");
               
//             }
                
//         })
//     }
        
// })

// fs.unlink("./folder/example.txt",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("File successfully deleted");
        
// })
// fs.rmdir("folder", {recursive: true}, (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Folder successfully deleted");
        
// })

// fs.readdir("./example", (err, files)=>{
//     if(err)
//         console.log(err);
//     else{
//         for(let file of files){
//             fs.unlink("./example/"+file, (err)=>{
//                 if(err)
//                     console.log(err);
//                 else
//                     console.log("File successfully deleted");
//             })
//         }
//     }
// })

// const readStream = fs.createReadStream("largefile.txt","utf-8");
// // const writeStream = fs.createWriteStream("example2.txt");
// // readStream.on("data", (chunk)=>{
// //     writeStream.write(chunk);
// // })
// readStream.on("data", (chunk)=>{
//     console.log(chunk);
// })

// fs.readFile("largefile.txt", (err, file)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(file);
//     }
// })

const zlib = require("zlib");
//const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
//const readStream = fs.createReadStream("./example.txt", "utf8");
const readStream = fs.createReadStream("./example2.txt.gz",);

const writeStream = fs.createWriteStream("uncompressed.txt");
readStream.pipe(gunzip).pipe(writeStream);
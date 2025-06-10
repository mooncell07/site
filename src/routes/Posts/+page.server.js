import fs from 'fs';
import path from 'path';

export function load({ params }) {
    let files = fs.readdirSync("blog/")
    let blogs = []

    for (let file of files){
        let data = fs.readFileSync("blog/" + file, "utf-8").split("\n");
        if ((data.length > 0) && (data[0].startsWith("@"))){
            let header = data[0].slice(1);
            
            try{
                blogs.push([file, parseInt(header)])
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Following Blog is either empty or doesnt have the @ header: " +file);
        }
        
    }
    blogs.sort((v1, v2) => {if (v1[1] < v2[1]) return 1; if (v1[1] > v2[1]) return -1;});
    
    return {
        blogs
    };
}


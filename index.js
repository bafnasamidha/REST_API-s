const express=require("express");

//import user from json file
const users=require("./MOCK_DATA (1).json");


const app= express();

app.get("/api/user",(req,res)=>{

    res.send(users);
    //it directly convert the content-type as the type of content 

    // res.json(users);
    //it is directly convert js object to JSON format

    // res.end(JSON.stringify(users));
    //we can convert it to JSON format through JSON.stringfy() function 
});

app.get("/user",(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>
        {
            return `<li>
            ${user.first_name}
            </li>`
        }
        ).join("")
    }
    </ul>
    `;
    res.send(html);
});

app.listen(8000,()=>{
    console.log("server started");
})
const express=require("express");

//import user from json file
const users=require("./MOCK_DATA (1).json");


const app= express();

//--server side rendering
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

//--client side rendering
app.get("/api/user",(req,res)=>{

    res.send(users);
    //it directly convert the content-type as the type of content 

    // res.json(users);
    //it is directly convert js object to JSON format

    // res.end(JSON.stringify(users));
    //we can convert it to JSON format through JSON.stringfy() function 
});

app.get("/api/user/:id",(req,res)=>{
    const id=req.params.id;
    const user=users.find((user)=>user.id==id);
    res.json(user);
})

app.listen(8000,()=>{
    console.log("server started");
})
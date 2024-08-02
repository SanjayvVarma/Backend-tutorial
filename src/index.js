import dbConnection from "./database/dbConnection.js";
import app from "./app.js";


dbConnection()

app.on("error", (error)=>{
    console.log("ERROR", error);
    throw error;
})

app.listen(process.env.PORT || 8080, ()=>{
console.log("Server is running at port ", process.env.PORT );
})
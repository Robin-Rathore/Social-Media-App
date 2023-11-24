
import express from "express";
const app = express();
import userRoutes from "./Routes/users.js"
import authRoutes from "./Routes/auth.js"
import postRoutes from "./Routes/posts.js"
import likeRoutes from "./Routes/likes.js"
import commentsRoutes from "./Routes/comments.js"
import cors from "cors"
import cookieParser from "cookie-parser"

// Middlewares
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next();

})
app.use(express.json())
app.use(cors({origin:"http://localhost:3000",
}))

app.use(cookieParser());

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/post", postRoutes)
app.use("/api/like", likeRoutes)
app.use("/api/comments",commentsRoutes)
app.listen(8800 , ()=>{
    console.log("Server Connected");
})
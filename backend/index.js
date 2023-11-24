
import express from "express";
const app = express();
import userRoutes from "./Routes/users.js"
import authRoutes from "./Routes/auth.js"
import postRoutes from "./Routes/posts.js"
import likeRoutes from "./Routes/likes.js"
import commentsRoutes from "./Routes/comments.js"

// Middlewares
app.use(express.json())

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/post", postRoutes)
app.use("/api/like", likeRoutes)
app.use("/api/comments",commentsRoutes)
app.listen(8800 , ()=>{
    console.log("Server Connected");
})
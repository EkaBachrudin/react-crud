import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./route/UserRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/fullstack_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', ()=> console.log('database connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('server up end runnig...'));
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import {dirname} from "path";
import {join} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// handle local path name for when on server
const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

//  MIDDLEWARE  ///

// Serve static files from the "public" directory
app.use(express.static(join(__dirname, "/public")));

// get the raw request stream into a JS object 'body'
app.use(bodyParser.urlencoded({ extended: true }));


// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "get-on-with-it",
//   password: "letmein",
//   port: 5432,
// });
// db.connect();

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
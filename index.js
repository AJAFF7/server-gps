// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// //import { config } from "dotenv";
// import mongoose from "mongoose";
// import { userRouter } from "./routes/blogsroute.js";

// //config(); 

// const port = 7070;
// const app = express();




// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// //app.use(express.static("build")); 
// app.use("/api", userRouter);



// mongoose.connect('mongodb+srv://ajsengineer:mdb5550140@blogs.uhzsop3.mongodb.net/Blogs?retryWrites=true&w=majority',{

//  }).then(() => console.log('DB Connected...')).catch((err) => {console.log(err);})

// //mongoose.connect(process.env.MONGODB_URI,{
// //}).then(() => console.log('DB Connected...')).catch((err) => {console.log(err);})


// app.listen(port,  () => console.log("Server running on port:", port));



// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import { userRouter } from "./routes/blogsroute.js";

// // Get the directory name of the current module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const port = 7070;
// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static("build")); 
// app.use("/api", userRouter);

// // Explicitly import the 'path' module
// import path from 'path';

// // Serve React app for any other route
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

// mongoose.connect('mongodb+srv://ajsengineer:mdb5550140@blogs.uhzsop3.mongodb.net/Blogs?retryWrites=true&w=majority',{
//  }).then(() => console.log('DB Connected...')).catch((err) => {console.log(err);})

// app.listen(port,  () => console.log("Server running on port:", port));












import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from "dotenv";
import mongoose from "mongoose";
import { userRouter } from "./routes/blogsroute.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import connectMongoDBSession from "connect-mongodb-session";

import path from 'path';

config();

const port = 7272;
const app = express();

// Configure session store
const MongoDBStore = connectMongoDBSession(session);
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

// Catch errors 
store.on("error", function (error) {
  console.error(error);
});

// Configure session middleware
const sessionMiddleware = session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
    maxAge: 30 * 1000, // Set initial maxAge to 30 seconds
  },
});

// Middleware to renew session expiration time on each request
// const renewSessionMiddleware = (req, res, next) => {
//   if (req.session) {
//     // Set maxAge of session cookie to 30 seconds on each request
//     req.session.cookie.maxAge = 30 * 1000; // Refresh session every 30 seconds
//   }
//   next();
// };

// Use session middleware
app.use(sessionMiddleware);

// Use middleware to renew session expiration time on each request
// app.use(renewSessionMiddleware);

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("build"));
app.use("/api", userRouter);

//Serve React app for any other route
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.get('*', (req, res) => {
  /res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("DB Connected..."))
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => console.log("Server running on port:", port));

const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Aleksey:a5GUmYsF0489Jf5D@cluster0.zhf5ern.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      // console.log(client)
      const app = require("./app");

      const server = http.createServer(app);
      let PORT = 3008;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

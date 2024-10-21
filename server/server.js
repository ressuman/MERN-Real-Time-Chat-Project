const server = require("./app");

const PORT = 4290;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(
    `Server is running: Listening to requests at http://${HOST}:${PORT}`
  );
});

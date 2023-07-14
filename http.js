const http = require("node:http");
const { parse } = require("querystring");

// create server
const server = http.createServer((req, res) => {
  const route = req.url;
  const method = req.method;
  if (route === "/") {
    // set header - client an info
    // set status code - ok, failed, bad request, not found
    // set response message - response message
    // Header
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // close the communication channel, send back a body

    // body
    // res.end("Welcome to the home route");
    const body = `You are in the "${route}" route`;
    const header = getHeader(200, "text/plain", body);
    handleResponse(res, header);
  }

  if (route === "/contact") {
    // set Header
    const body = "You are now in the " + route + " route";
    const header = getHeader(200, "text/plain", body);
    handleResponse(res, header);
  }

  //   intent of the request
  //   HTTP Client

  const db = [];
  // POST
  if (route === "/user" && method === "POST") {
    let payload = "";
    req.on("data", (chunk) => {
      payload += chunk.toString();
    });

    req.on("end", () => {
      console.log(payload);
      handleResponse(res, getHeader(201, "application/json", payload));
    });
  }
});

function handleResponse(res, options) {
  const { code, contentType, msg } = options;
  console.log(code, contentType, msg);
  res.writeHead(code, { "Content-Type": contentType });
  res.end(msg);
}

function getHeader(code, contentType, body) {
  return { code, contentType, msg: body };
}
// Request Methods or HTTP Verbs

// GET -
// POST -
// PUT
// PATCH
// DELETE

// create a port
const PORT = 3000;

// 127.0.0.1 = Private address

// Plug server to this port
server.listen(PORT, () => {
  console.log(`server running on http://127.0.0.1:${PORT}`);
});

let fs = require("fs");
let path = require("path");
var http = require("http");
const port = +process.env.PORT || 3000;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const html = fs.readFileSync("./index.html");
    res.end(html);
  })
  .listen(3000, () => {
    console.log(`Server is running on: http://localhost:${port}`);
  });
//     res.writeHead(200, {
//         'content-type': 'text/html'
//     }),
//     res.write ('<h1 class="text-center">Zaddy CHIll</h1>')
//     res.end()
// }).listen(port, ()=> {
//     console.log(`Server is running on: http://localhost:${port}`);
// });

const fileName = path.join(__dirname, "./index.html");

function write(content) {
  try {
    fs.writeFile(fileName, content, (err) => {
      if (!err) console.log("saved");
    });
  } catch (e) {
    console.log("Issue when writing to the file");
  }
}

function append(content) {
  try {
    fs.appendFile(fileName, content, (err) => {
      if (!err) console.log("Your data has been modified");
    });
  } catch (e) {
    console.log("Issue when appending to the file");
  }
}

// append("<style> h1{color: red}</style>")
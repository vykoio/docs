const https = require("follow-redirects").https,
  fs = require("fs"),
  config = require("./config.json");
console.log("CLEARING CACHE FOR DOCS...\n");

let fileFolders = "./docs/";

let files = ["https://docs.vyko.io/", "https://docs.vyko.io/docs"];
fs.readdirSync(fileFolders).forEach((file) => {
  let actualFile = "https://docs.vyko.io/" + file.split(".")[0];
  files.push(actualFile);
  files.push(actualFile + ".html");
});

var options = {
  method: "POST",
  hostname: "api.cloudflare.com",
  path: "/client/v4/zones/19988a5553e9b6ac9389aab2864fd44b/purge_cache",
  headers: {
    Authorization: "Bearer " + config.cloudflare,
    "Content-Type": "application/json",
    Cookie: "__cfduid=d584748f772b269ff82a662d6c4f3858d1587129503",
  },
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({
  files: files,
});

req.write(postData);

req.end();

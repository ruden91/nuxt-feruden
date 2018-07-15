const contentful = require("contentful");
console.log(process.env);
const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
});

module.exports = client;

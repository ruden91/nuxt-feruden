const contentful = require("contentful");
console.log(process.env);
const client = contentful.createClient({
  space: "hu4faubeotg0",
  accessToken:
    "98beb767cc8236512e0585eb3063ccc48d6e69894845851743a3f60e2a60b358"
  // space: process.env.CTF_SPACE_ID,
  // accessToken: process.env.CTF_ACCESS_TOKEN
});

module.exports = client;

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/waddle";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("On root page");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My villa",
    description: "This is my villa of 4 flour with everything available",
    image:
      "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    price: 4000,
    location: "jaipur Rajasthan",
    country: "India",
  });

  await sampleListing.save();
  console.log(sampleListing);
  res.send("Testing successfully");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

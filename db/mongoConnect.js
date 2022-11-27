const mongoose = require('mongoose');
const { config } = require("../config/secret")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.userDB}:${config.userPass}@clustercats.7pkwn7o.mongodb.net/idf78`
  );
  console.log("mongo connect idf 78 Atlas");

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
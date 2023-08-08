const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const aplication = require("./application");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB connection successful");
  })
  .catch((error) => {
    console.log(error);
  });
//---------------SERVER----------------
aplication.listen(process.env.PORT, () => {
  console.log(`Listening to PORT:${process.env.PORT}`);
});

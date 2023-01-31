const path = require("path");
const multer = require("multer");
const uuid = require("uuid");

const product_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/products");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const extention = path.parse(file.originalname).ext;
    const random_name = uuid.v4() + extention;
    cb(null, random_name); // gives unique string name
  },
});

module.exports.uploadPoductImage = multer({ storage: product_storage });

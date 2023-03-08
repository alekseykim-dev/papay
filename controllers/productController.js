const Product = require("../models/Product");
const assert = require("assert");
const Definer = require("../lib/mistake");
let productController = module.exports;

// requests go to router_BSSR
productController.getAllProducts = async (req, res) => {
  try {
    console.log("POST cont/getAllProducts");
    const product = new Product();
    const results = await product.getAllProductsData(req.member, req.body);
    await res.json({ state: "Succeeded!", data: results });
  } catch (err) {
    console.log(`ERROR, cont/getAllProducts, ${err.message}`);
    res.json({ state: "failed", message: err.message });
  }
};


/************************************
 *       BSSR RELATED METHODS       *
 ***********************************/



productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");
    assert(req.files, Definer.general_err3); // works as try & catch
    const product = new Product();
    let data = req.body;
    // 23  takes name from POSTMAN

    data.product_images = req.files.map((ele) => {
      return ele.path; //shows where each file is uploaded
    });

    const result = await product.addNewProductData(data, req.member);

    // console.log(data) // shows path
    const html = `<script>alert('new dish added successfully');
    window.location.replace('/resto/products/menu') 
    </script>`;
    res.end(html);
  } catch (err) {
    console.log(`ERROR cont/addNewProduct, ${err.message}`);
  }
};

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProduct");
    const product = new Product();
    const id = req.params.id;
    const result = await product.updateChosenProductData(
      id,
      req.body,
      req.member._id
    );
    await res.json({ state: "Success", data: result });
  } catch (err) {
    console.log(`ERROR cont/updateChosenProduct, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};
   
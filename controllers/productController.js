let productController = module.exports;

// requests go to router_BSSR
productController.getAllProducts = async (req, res) => {
  try {
    console.log("GET: cont/getAllProducts");
  } catch (err) {
    console.log(`ERROR cont/getAllProducts, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

productController.addNewProduct = async (req, res) => {
    try {
      console.log("POST: cont/addNewProduct");
    //   console.log(req.member);  // returns console with data
    
      res.send('ok') //if not write, postman sends nothing because we are not requesting JSON obj
      // TODO: product creation develop
    } catch (err) {
      console.log(`ERROR cont/addNewProduct, ${err.message}`);
      
    }
  };

productController.updateChosenProduct = async (req, res) => {
    try {
      console.log("POST: cont/updateChosenProduct");
    } catch (err) {
      console.log(`ERROR cont/updateChosenProduct, ${err.message}`);
      
    }
  };

const assert = require("assert");
const { shapeIntoMongooseObjectId } = require("../lib/config");
const Definer = require("../lib/mistake");
const ProductModel = require("../schema/product.model");


class Product {
  constructor() {
    this.productModel = ProductModel;
  }

async getAllProductsDataResto(member) {
  try{
    member._id = shapeIntoMongooseObjectId(member._id);
    const result = await this.productModel.find({
      restaurant_mb_id: member._id
    })
    assert.ok(result, Definer.general_err1);
    console.log('result:', result ) //empty
    return result;
  } catch(err){
    throw(err);
  }
}

  async addNewProductData(data, member) {
    try {
      data.restaurant_mb_id = shapeIntoMongooseObjectId(member._id);

      const new_product = new ProductModel(data);
      const result = await new_product.save();

      assert.ok(result, Definer.product_err1);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async updateChosenProductData(id, updated_data, mb_id) {
    try {
      id = shapeIntoMongooseObjectId(id);
      mb_id = shapeIntoMongooseObjectId(mb_id);

      const result = await this.productModel
        .findOneAndUpdate({ _id: id, restaurant_mb_id: mb_id }, updated_data, {
          runValidators: true,
          lean: true,
          returnDocument: "after",  // shows new data
          // "before" shows the old data // but db changes
        })
        .exec();

      assert.ok(result, Definer.general_err1);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

// cont => ser mod => db schema mod

module.exports = Product;

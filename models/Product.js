const assert = require('assert');
const { shapeIntoMongooseObjectId } = require('../lib/config');
const Definer = require('../lib/mistake');
const ProductModel = require ('../schema/product.model');

class Product {
    constructor() {
        this.productModule = ProductModel
    }
    async addNewProductData(data, member) {
        try {
           data.restaurant_mb_id = shapeIntoMongooseObjectId(member._id);

           const new_product = new this.productModule(data);
           const result = await new_product.save()

           assert.ok(result, Definer.product_err1);

           return result;
        } catch(err) {
            throw err
        }
    }
}

// cont => ser mod => db schema mod


module.exports = Product
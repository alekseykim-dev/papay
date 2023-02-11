const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

exports.member_type_enums = ["USER", "ADMIN", "PEDAL", "RESTAURANT"];
exports.member_status_enums = ["ONPAUSE", "ACTIVE", "DELETED"];
exports.ordernary_enums = ["Y", "N"];

exports.product_collection_enums = ["dish", "salad", "dessert", "beverage", "other"];
exports.product_status_enums = ["PAUSED", "PROCESS", "DELETED"];
exports.product_size_enums = ["small", "normal", "large", "set"];
exports.product_volume_enums = [0.5, 1, 1.2, 1.5, 2];


/****************************************
 *       MONGODB RELATED COMMANDS       *
 ****************************************/

exports.shapeIntoMongooseObjectId = (target) => {
    if(typeof target === 'string') {
        return new mongoose.Types.ObjectId(target);
    } else return target; 
}


const assert = require("assert");
const MemberModel = require("../schema/member.model");
const Definer = require("../lib/mistake");
const { shapeIntoMongooseObjectId } = require("../lib/config");

class Restaurant {
  constructor() {
    this.memberModel = MemberModel;
  }

  async getAllRestaurantsData() {
    try {
      let result = await this.memberModel
        .find({
          mb_type: "RESTAURANT",
        })
        .exec();

      assert(result, Definer.general_err1);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async updateRestaurantByAdminData(update_data) {
    try {
      const id = shapeIntoMongooseObjectId(update_data?.id);
      const result = await this.memberModel
        .findByIdAndUpdate(
          { _id: id },
          update_data,
          { runValidators: true, lean: true, returnDocument: "after" } //valid is updating, lean is returning js object not mongoose
        )
            .exec(); // mongoose helper, execs queries or conditions
        
        assert.ok(result, Definer.general_err1)
        return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Restaurant;

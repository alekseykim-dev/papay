const MemberModel = require("../schema/member.model");
const Definer = require("../lib/mistake");
const assert = require("assert");
const bcrypt = require("bcrypt");
const { shapeIntoMongooseObjectId } = require("../lib/config");
const View = require("./View");
class Member {
  constructor() {
    this.memberModel = MemberModel;
  }
  async signupData(input) {
    try {
      const salt = await bcrypt.genSalt();
      input.mb_password = await bcrypt.hash(input.mb_password, salt);
      const new_member = new this.memberModel(input);

      let result;
      try {
        result = await new_member.save();
      } catch (mongo_err) {
        console.log(mongo_err);
        throw new Error(Definer.auth_err1);
      }
      result.mb_password = "";
      return result;
    } catch (err) {
      throw err;
    }
  }
  async loginData(input) {
    try {
      const member = await this.memberModel
        .findOne({ mb_nick: input.mb_nick }, { mb_nick: 1, mb_password: 1 }) //forced query // 1 = neccesary, 0 = not necessary
        .exec();

      assert.ok(member, Definer.auth_err3);

      const isMatch = await bcrypt.compare(
        input.mb_password,
        member.mb_password
      );
      assert.ok(isMatch, Definer.auth_err4);

      return await this.memberModel
        .findOne({
          mb_nick: input.mb_nick,
        })
        .exec();
    } catch (err) {
      throw err;
    }
  }
  // who?  whose?
  async getChosenMemberData(member, id) {
    try {
      id = shapeIntoMongooseObjectId(id);

      console.log("member:", member); // if auth, shows data. if not null

      if (member) {
        // not available for non-users
        // +1 for each view if not seen before
        await this.viewChosenItemByMember(member, id, "member");
        // who called the method, id, what type of item am i looking at
      }

      const result = await this.memberModel
        .aggregate([
          { $match: { _id: id, mb_status: "ACTIVE" } },
          { $unset: "mb_password" },
          // todo: check auth member likes chosen member
        ])
        .exec();

      assert.ok(result, Definer.general_err2);
      return result[0];
    } catch (err) {
      throw err;
    }
  }

  async viewChosenItemByMember(member, view_ref_id, group_type) {
    try {
      view_ref_id = shapeIntoMongooseObjectId(view_ref_id);
      const mb_id = shapeIntoMongooseObjectId(member._id);// who is watching

      const view = new View(mb_id); //View.js
      // validation needed for target checking(product or member is active or not)
      const isValid = await view.validateChosenTarget(view_ref_id, group_type);
      assert.ok(isValid, Definer.general_err2);

      // logged in has seen target before or not  1 = 1
      const doesExist = await view.checkViewExistence(view_ref_id);
      console.log("doesExist:", doesExist);

      if (!doesExist) {
        const result = await view.insertMemberView(view_ref_id, group_type);
        assert.ok(result, Definer.general_err1);
      }
      return true;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Member;

// member service model

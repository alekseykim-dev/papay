const memberModel = require("../schema/member.model");
const ViewModel = require("../schema/view.model");

class View {
  constructor(mb_id) {
    this.viewModel = ViewModel;
    this.memberModel = memberModel;
    this.mb_id = mb_id;
  }

  async validateChosenTarget(_id, group_type) {
    try {
      let result;
      switch (group_type) {
        case "member":
          result = await this.memberModel
            .findById({ _id: _id, mb_status: "ACTIVE" })
            .exec();
          break;
      }

      return !!result; // returns boolean value
    } catch (err) {
      throw err;
    }
  }
  async insertMemberView(view_ref_id, group_type) {
    try {
      const new_view = new this.viewModel({
        mb_id: this.mb_id,
        view_ref_id: view_ref_id,
        view_group: group_type,
      });
      const result = await new_view.save();

      // increase views in target items
      await this.modifyItemViewCounts(view_ref_id, group_type);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async modifyItemViewCounts(view_ref_id, group_type) {
    try {
      switch (group_type) {
        case "member":
          await this.memberModel
            .findByIdAndUpdate(
              {
                _id: view_ref_id,
              },
              { $inc: { mb_views: 1 } }
            )
            .exec();
          break;
      }
      return true;
    } catch (err) {
      throw err;
    }
  }

  async checkViewExistence(view_ref_id) {
    try {
        const view = await this.viewModel.findOne({ mb_id: this.mb_id, view_ref_id: view_ref_id }).exec()
        return view ? true : false
    } catch (err) {
      throw err;
    }
  }
}

module.exports = View;

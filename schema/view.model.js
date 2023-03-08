const mongoose = require("mongoose");
const { like_view_group_list, board_id_enum_list } = require("../lib/config");
const Schema = mongoose.Schema;

const viewSchema = new mongoose.Schema(
  {
    mb_id: { type: Schema.Types.ObjectId, required: true },
    view_ref_id: { type: Schema.Types.ObjectId, required: true },
    view_group: {
      type: String,
      required: true,
      enum: {
        values: like_view_group_list,
      },
    },
    bo_id: {
      type: String,
      required: false, //only in community // Back Office ID// unique identifier for a document in mongodb. if default is not suitable or the id is generated  externally, bo_id is the solution,
      enum: {
        values: board_id_enum_list,
      },
    },
  },
  { timestamps: { createdAt: true } }
);


module.exports = mongoose.model("View", viewSchema)
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    mb_nick: {
        type: String,
        required: true,
        index: {unique: true, sparse: true} //not to be dublicated
    },
    mb_phone: {
        type: String,
        requires: true,
    },
    mb_password: {
        type: String,
        required: true,
        select: false // won't return the password by default
    },
    mb_type: {
        type: String,
        required: false,
        default: "USER",
        enum: {
            values: member_type_enums,
            message: "{VALUE} is not among permitted values"
        }
    },
    mb_status: {
        type: String,
        required: false,
        default: "ACTIVE",
        enum: {
            values: member_status_enums,
            message: "{VALUE} is not among permitted values"
        }
    },
    mb_full_name: {
        type: String,
        required: false
    },
    mb_address: {
        type: String,
        required: false,
    },
    mb_image: {
        type: String,
        required: false
    },
    mb_point: {
        type: Number,
        required: false,
        default: 0
    }
});

module.exports = mongoose.model("Member", memberSchema);
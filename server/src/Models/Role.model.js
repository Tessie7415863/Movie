const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    loai_nguoi_dung: {
        type: String,
        required: true,
    },
    mo_ta: {
        type: String,
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('Role', RoleSchema);
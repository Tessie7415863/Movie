const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NguoiDungSchema = new Schema({
    ho_ten: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    so_dt: {
        type: Number,
        required: true,
    },
    mat_khau: {
        type: String,
        required: true,
    },
    loai_nguoi_dung: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('NguoiDung', NguoiDungSchema);
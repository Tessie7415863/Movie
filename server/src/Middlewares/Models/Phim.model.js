const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhimSchema = new Schema({
    ten_phim: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
    },
    hinh_anh: {
        type: String,
    },
    mo_ta: {
        type: String,
    },
    ngay_khoi_chieu: {
        type: String,
    },
    danh_gia: {
        type: Number,
    },
    hot: {
        type: Boolean,
    },
    dang_chieu: {
        type: Boolean,
    },
    sap_chieu: {
        type: Boolean,
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('Phim', PhimSchema);
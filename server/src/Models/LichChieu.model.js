const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LichChieuSchema = new Schema({
    ma_rap: {
        type: Schema.Types.ObjectId,
        ref: 'RapPhim',
        required: true,
    },
    ma_phim: {
        type: Schema.Types.ObjectId,
        ref: 'Phim',
    },
    ngay_gio_chieu: {
        type: Date,
        required: true,
    },
    gia_ve: {
        type: Number,
        required: true,
    },

}, {
    versionKey: false,
});

module.exports = mongoose.model('LichChieu', LichChieuSchema);
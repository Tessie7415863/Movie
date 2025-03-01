const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
    ma_phim: {
        type: Schema.Types.ObjectId,
        ref: 'Phim',
    },
    hinh_anh: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('Banner', BannerSchema);
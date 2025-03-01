const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CumRapSchema = new Schema({
    ten_cum_rap: {
        type: String,
        required: true
    },
    dia_chi: {
        type: String,
        required: true
    },
    ma_he_thong_rap: {
        type: Schema.Types.ObjectId,
        ref: 'HeThongRap',
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('CumRap', CumRapSchema);
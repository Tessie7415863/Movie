const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RapPhimSchema = new Schema({
    ten_rap: {
        type: String,
        required: true,
    },
    ma_cum_rap: {
        type: Schema.Types.ObjectId,
        ref: 'CumRap',
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('RapPhim', RapPhimSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GheSchema = new Schema({
    ten_ghe: {
        type: String,
        required: true
    },
    loai_ghe: {
        type: String,
        required: true
    },
    ma_rap: {
        type: Schema.Types.ObjectId,
        ref: 'RapPhim',
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('Ghe', GheSchema);
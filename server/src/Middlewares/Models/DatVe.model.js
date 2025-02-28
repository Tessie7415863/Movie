const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DatVeSchema = new Schema({
    ma_lich_chieu: {
        type: String,
        required: true,
    },
    ma_ghe: {
        type: Schema.Types.ObjectId,
        ref: 'Ghe',
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('DatVe', DatVeSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeThongRapSchema = new Schema({
    ten_he_thong_rap: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('HeThongRap', HeThongRapSchema);
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
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                const start = new Date('2025-03-01');
                const end = new Date('2025-12-31');
                return value >= start && value <= end;
            },
            message: props => `Ngày khởi chiếu (${props.value}) phải nằm trong khoảng từ 2023-01-01 đến 2023-12-31!`
        }
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
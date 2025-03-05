const express = require('express');
const rootRoute = express.Router();

//auth
const Login = require('./Auth/Login');
const Register = require('./Auth/Register');
const createRole = require('./Auth/createRole');
const getRole = require('./Auth/getRole');

//NguoiDung
const createNguoiDung = require('./NguoiDung/createNguoiDung');
const updateNguoiDung = require('./NguoiDung/updateNguoiDung');
const deleteNguoiDung = require('./NguoiDung/deleteNguoiDung');
const getAllNguoiDung = require('./NguoiDung/getAllNguoiDung');

//Banner
const createBanner = require('./Banner/createBanner');
const updateBanner = require('./Banner/updateBanner');
const deleteBanner = require('./Banner/deleteBanner');
const getAllBanner = require('./Banner/getAllBanner');

//HeThongRap
const createHeThongRap = require('./HeThongRap/createHeThongRap');
const updateHeThongRap = require('./HeThongRap/updateHeThongRap');
const deleteHeThongRap = require('./HeThongRap/deleteHeThongRap');
const getAllHeThongRap = require('./HeThongRap/getAllHeThongRap');

//CumRap
const createCumRap = require('./CumRap/createCumRap');
const updateCumRap = require('./CumRap/updateCumRap');
const deleteCumRap = require('./CumRap/deleteCumRap');
const getAllCumRap = require('./CumRap/getAllCumRap');

//RapPhim
const createRapPhim = require('./RapPhim/createRapPhim');
const updateRapPhim = require('./RapPhim/updateRapPhim');
const deleteRapPhim = require('./RapPhim/deleteRapPhim');
const getAllRapPhim = require('./RapPhim/getAllRapPhim');

//Ghe
const createGhe = require('./Ghe/createGhe');
const updateGhe = require('./Ghe/updateGhe');
const deleteGhe = require('./Ghe/deleteGhe');
const getAllGhe = require('./Ghe/getAllGhe');

//Phim
const createPhim = require('./Phim/createPhim');
const updatePhim = require('./Phim/updatePhim');
const deletePhim = require('./Phim/deletePhim');
const getAllPhim = require('./Phim/getAllPhim');

//LichChieu
const createLichChieu = require('./LichChieu/createLichChieu');
const updateLichChieu = require('./LichChieu/updateLichChieu');
const deleteLichChieu = require('./LichChieu/deleteLichChieu');
const getAllLichChieu = require('./LichChieu/getAllLichChieu');

//DatVe
const createDatVe = require('./DatVe/createDatVe');
const updateDatVe = require('./DatVe/updateDatVe');
const deleteDatVe = require('./DatVe/deleteDatVe');
const getAllDatVe = require('./DatVe/getAllDatVe');

//auth
rootRoute.use('/auth', Login)
rootRoute.use('/auth', Register)
rootRoute.use('/auth', createRole)
rootRoute.use('/auth', getRole)

//NguoiDung
rootRoute.use('/nguoi-dung', createNguoiDung)
rootRoute.use('/nguoi-dung', updateNguoiDung)
rootRoute.use('/nguoi-dung', deleteNguoiDung)
rootRoute.use('/nguoi-dung', getAllNguoiDung)

//Banner
rootRoute.use('/banner', createBanner)
rootRoute.use('/banner', updateBanner)
rootRoute.use('/banner', deleteBanner)
rootRoute.use('/banner', getAllBanner)

//HeThongRap
rootRoute.use('/he-thong-rap', createHeThongRap)
rootRoute.use('/he-thong-rap', updateHeThongRap)
rootRoute.use('/he-thong-rap', deleteHeThongRap)
rootRoute.use('/he-thong-rap', getAllHeThongRap)

//CumRap
rootRoute.use('/cum-rap', createCumRap)
rootRoute.use('/cum-rap', updateCumRap)
rootRoute.use('/cum-rap', deleteCumRap)
rootRoute.use('/cum-rap', getAllCumRap)

//RapPhim
rootRoute.use('/rap-phim', createRapPhim)
rootRoute.use('/rap-phim', updateRapPhim)
rootRoute.use('/rap-phim', deleteRapPhim)
rootRoute.use('/rap-phim', getAllRapPhim)

//Ghe
rootRoute.use('/ghe', createGhe)
rootRoute.use('/ghe', updateGhe)
rootRoute.use('/ghe', deleteGhe)
rootRoute.use('/ghe', getAllGhe)

//Phim
rootRoute.use('/phim', createPhim)
rootRoute.use('/phim', updatePhim)
rootRoute.use('/phim', deletePhim)
rootRoute.use('/phim', getAllPhim)

//LichChieu
rootRoute.use('/lich-chieu', createLichChieu)
rootRoute.use('/lich-chieu', updateLichChieu)
rootRoute.use('/lich-chieu', deleteLichChieu)
rootRoute.use('/lich-chieu', getAllLichChieu)


//DatVe
rootRoute.use('/dat-ve', createDatVe)
rootRoute.use('/dat-ve', updateDatVe)
rootRoute.use('/dat-ve', deleteDatVe)
rootRoute.use('/dat-ve', getAllDatVe)

module.exports = rootRoute;
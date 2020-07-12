const jam = require('../model/jam')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId


exports.inputDataJam = (data, gambar) =>
    new Promise(async (resolve, reject)=>{

        const jamBaru = new jam({
            kodejam: data.kodejam,
            merkjam: data.merkjam,
            hargajam: data.hargajam,
            gambar: gambar
        })

       await jam.findOne({kodejam: data.kodejam})
            .then(jam => {
                if (jam){
                    console.log("kode jam sudah digunakan")
                }else {
                    jamBaru.save()
                        .then(r=>{
                            resolve(response.commonSuccessMsg('Berhasil menginput data'))
                        }).catch(err => {
                        reject(response.commonErrorMsg('mohon maaf Input Gagal'))
                    })
                }
            }).catch(err => {
                 reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami'))
        })

    })

exports.lihatDataJam = () =>
    new Promise(async (resolve, reject) => {
        await jam.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami')))
    })

exports.lihatDetailDataJam = (kodejam) =>
    new Promise(async (resolve, reject) => {
        await jam.findOne({kodejam: kodejam})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami')))
    })

        exports.updateJam = (id, data, gambar) =>
    new Promise(async (resolve, reject)=>{
      await jam.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodejam: data.kodejam,
                    merkjam: data.merkjam,
                    hargajam: data.hargajam,
                    gambar: gambar
                }
            }
        ).then(jam => {
            resolve(response.commonSuccessMsg('Berhasil mengubah data'))
        }).catch(err => {
            reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami'))
        })
    })

exports.hapusjam = (_id) =>
    new Promise(async (resolve, reject) => {
        await jam.remove({_id: ObjectId(_id)})
            .then(() => {
                resolve(response.commonSuccessMsg('Berhasil menghapus data'))
            }).catch(() => {
                reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami'))
            })
    })

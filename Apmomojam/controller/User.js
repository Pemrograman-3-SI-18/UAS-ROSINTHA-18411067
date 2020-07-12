const userModel = require('../model/User.js')
const response = require('../config/response')
const bcrypt = require('bcrypt')


exports.registrasi = (data) =>
   new Promise(((resolve, reject) => {
      userModel.findOne({username: data.username})
          .then(pengguna =>{
             if(pengguna) {
                resolve(response.commonErrorMsg('Username sudah digunakan'))
             }else{
                bcrypt.hash(data.password,10, (err, hash)=>{
                   if (err) {
                      reject(response.commonErrorMsg)
                   }else{
                      data.password = hash
                      userModel.create(data)
                          .then(() => resolve(response.commonSuccessMsg('Berhasil Registrasi')))
                          .catch(() => reject(response.commonErrorMsg('mohon maaf, registrasi gagal')))
                   }
                })
             }
          }) .catch(() => reject(response.commonError))
   }))

exports.login = (data) =>
    new Promise((resolve, reject) => {
       userModel.findOne({
          username: data.username
       }).then(pengguna => {
          if (pengguna) {
             if (bcrypt.compareSync(data.password, pengguna.password)) {
                resolve(response.commonResult(pengguna))
             } else {
                reject(response.commonErrorMsg('password salah'))
             }
          } else {
             reject(response.commonErrorMsg('username tidak di temukan'))
          }
       })
    })

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    username: {type: String, required: true,unique:true},
    password: {type: String,required: true},
    email: {type: String,required: true, unique: true},
    hoten: {type: String},
    phone:{type: String},
    gioitinh:{type: String, default:'male'},
    birthday:{type: Date},
    tuoi:{type: Number,default: 0},
    diachi:{type: String},
    quyen: {type: String, default: 'user'},
    mota: {type: String},
    avatar: {type: String}
  },
  { timestamps: true }
)
const User = mongoose.model('User',UserSchema);
module.exports = User;
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar.default.png'
  }

})

module.exports = mongoose.model('User', userSchema)
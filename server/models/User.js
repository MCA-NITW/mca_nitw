import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: String,
  institute: String,
  Batch: String
})

const User = mongoose.model('User', userSchema)

export default User

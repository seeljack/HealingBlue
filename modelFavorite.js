const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = mongoose.Schema({
    title: {
        type: String,
    },
    role: {
        type: String,
    },
    campus: {
        type: String,
    },
    email: {
        type: String,
    },
    description: {
        type: String,
    }
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = {Favorite}
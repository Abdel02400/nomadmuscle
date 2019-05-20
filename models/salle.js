const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalleSchema = new Schema({
    libelle : String,
    adresse: String,
    dimensions : String,
    equipements : [],
    maxuser : Number,
    calendrier: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'}],
    services: [],
    photos: [{url: String, _id: false}],
    accept: { type: Boolean, default: true },
    tarif: Number,
    remboursement : Number,
});

const Salle = mongoose.model('user', SalleSchema);

module.exports = Salle;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    datetime: Date,
    salle: {type: mongoose.Schema.Types.ObjectId, ref: 'Salle'},
    duration: Number,
     
});

const Reservation = mongoose.model('reservartion', ReservationSchema);

module.exports = Reservation;
const mongoose = require('mongoose');

const VitalsSchema = new mongoose.Schema({
    book_no: { type: String, required: true },
    rbs: { type: Number },
    bp: { type: String },
    height: { type: Number },
    weight: { type: Number },
    pulse: { type: Number },
    extra_note: { type: String },
    timestamp: { type: String, required: true, match: /^\d{4}-\d{2}$/ },
  });
  
const Vitals = mongoose.model('Vitals', VitalsSchema);

module.exports = Vitals;
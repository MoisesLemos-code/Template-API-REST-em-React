const { Schema, model } = require('mongoose');

const FerramentaSchema = new Schema({
  descricao: {
    type: String,
    required: true
  },
  estoque: {
    type: Number,
    required: true
  },
  valor: {
    type: Number,
    required: true
  }
},
  {
    timestamps: true
  });

module.exports = model('Ferramenta', FerramentaSchema);
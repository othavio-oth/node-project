//Para criação da api
import restful from 'node-restful';

// para conexão com database
const mongoose = restful.mongoose

const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    age: { type: Number, min: 0, required: true }

})

module.exports = restful.model('Pessoa', PersonSchema)
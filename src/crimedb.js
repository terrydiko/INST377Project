const mongoose = require('mongoose');

const uri = 'mongodb+srv://inst377group:whizzper_inst377_project@cluster0.1ln19.mongodb.net/whizzper?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(res => console.log('Connection successful'))
    .catch(err => console.log(err))

const crimeSchema = new mongoose.Schema({
    crimetype: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    lon: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Crime = mongoose.model('Crime', crimeSchema);

module.exports = Crime;
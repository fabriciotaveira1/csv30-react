// backend/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexão com MongoDB estabelecida');
    } catch (error) {
        console.error('Falha ao autenticar com MongoDB', error);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
};

mongoose.Promise = global.Promise;

module.exports = connectDB;

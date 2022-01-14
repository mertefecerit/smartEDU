const Mongoose = require('mongoose');

const database = () => {
    const connect = Mongoose.connect(`${process.env.DB_URI}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?${process.env.DB_CRED}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connect.then(() => console.log('Database Connection OK.'))
           .catch(error => console.log(error));

}

module.exports = {
    database
}